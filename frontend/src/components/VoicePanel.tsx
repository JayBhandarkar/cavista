"use client";

import { useState, useRef, useEffect } from "react";

export default function VoicePanel() {
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [transcript, setTranscript] = useState("");
    const [interimTranscript, setInterimTranscript] = useState("");
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const websocketRef = useRef<WebSocket | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const bars = Array.from({ length: 40 }, (_, i) => i);

    useEffect(() => {
        if (isRecording) {
            timerRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);
        } else {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isRecording]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            // Connect to WebSocket
            const ws = new WebSocket("ws://localhost:8000/ws/transcribe");
            websocketRef.current = ws;
            
            ws.onopen = () => {
                console.log("WebSocket connected");
            };
            
            ws.onclose = () => {
                console.log("WebSocket closed");
            };
            
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                console.log("Received WebSocket message:", data);
                if (data.complete) {
                    console.log("Setting transcript:", data.transcript);
                    setTranscript(data.transcript);
                    setInterimTranscript("");
                }
            };
            
            ws.onerror = (error) => {
                console.error("WebSocket error:", error);
            };
            
            // Setup Web Audio API for PCM conversion
            const audioContext = new AudioContext({ sampleRate: 16000 });
            const source = audioContext.createMediaStreamSource(stream);
            const processor = audioContext.createScriptProcessor(4096, 1, 1);
            
            processor.onaudioprocess = (e) => {
                if (ws.readyState === WebSocket.OPEN) {
                    const inputData = e.inputBuffer.getChannelData(0);
                    const pcmData = floatTo16BitPCM(inputData);
                    ws.send(pcmData);
                }
            };
            
            source.connect(processor);
            processor.connect(audioContext.destination);
            
            // Store references for cleanup
            mediaRecorderRef.current = { audioContext, source, processor, stream };

            setIsRecording(true);
            setRecordingTime(0);
            setTranscript("");
            setInterimTranscript("");
        } catch (error) {
            console.error("Microphone permission denied or error:", error);
            alert("Microphone access is required for recording. Please allow microphone permissions.");
        }
    };

    const floatTo16BitPCM = (float32Array) => {
        const buffer = new ArrayBuffer(float32Array.length * 2);
        const view = new DataView(buffer);
        let offset = 0;

        for (let i = 0; i < float32Array.length; i++, offset += 2) {
            let s = Math.max(-1, Math.min(1, float32Array[i]));
            view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }

        return buffer;
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            const { audioContext, source, processor, stream } = mediaRecorderRef.current;
            
            processor.disconnect();
            source.disconnect();
            audioContext.close();
            stream.getTracks().forEach(track => track.stop());
            
            setIsRecording(false);
        }
        if (websocketRef.current) {
            websocketRef.current.close();
        }
    };

    const handleClick = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon red">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                            <path d="M19 10v2a7 7 0 01-14 0v-2" />
                        </svg>
                    </div>
                    <div>
                        <div className="card-title">Live Interaction</div>
                        <div className="card-subtitle">Voice recording</div>
                    </div>
                </div>
                <span className={`status-badge ${isRecording ? "processing" : "completed"}`}>
                    {isRecording ? "Recording" : "Ready"}
                </span>
            </div>

            <div className="card-body">
                <div className="voice-controls">
                    <button
                        className={`voice-record-btn ${isRecording ? "recording" : ""}`}
                        onClick={handleClick}
                        aria-label={isRecording ? "Stop recording" : "Start recording"}
                    >
                        {isRecording ? (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="6" width="12" height="12" rx="2" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                                <path d="M19 10v2a7 7 0 01-14 0v-2" />
                                <line x1="12" y1="19" x2="12" y2="23" />
                                <line x1="8" y1="23" x2="16" y2="23" />
                            </svg>
                        )}
                    </button>
                    <div className="voice-info">
                        <div className="voice-status">
                            {isRecording ? "Recording in progress..." : "Tap to start recording"}
                        </div>
                        <div className="voice-duration">
                            {formatTime(recordingTime)}
                        </div>
                    </div>
                </div>

                <div className="waveform">
                    {bars.map((i) => (
                        <div
                            key={i}
                            className={`waveform-bar ${isRecording ? "active" : ""}`}
                            style={{
                                height: isRecording ? undefined : `${8 + Math.random() * 16}px`,
                                animationDelay: `${i * 0.05}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="transcription-area" style={{ minHeight: "60px", padding: "10px", border: "1px solid #ccc", marginTop: "10px" }}>
                    <p>
                        {transcript || "Transcript will appear here after recording..."}
                        {interimTranscript && (
                            <span style={{ color: "#888" }}> {interimTranscript}</span>
                        )}
                    </p>
                    <button onClick={() => setTranscript("Test transcript from button")} style={{ marginTop: "10px", padding: "5px 10px" }}>
                        Test Display
                    </button>
                </div>
            </div>
        </div>
    );
}
