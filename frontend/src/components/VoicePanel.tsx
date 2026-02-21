"use client";

import { useState } from "react";

export default function VoicePanel() {
    const [isRecording, setIsRecording] = useState(false);

    const bars = Array.from({ length: 40 }, (_, i) => i);

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
                        <div className="card-title">Voice Recording</div>
                        <div className="card-subtitle">Capture & transcribe</div>
                    </div>
                </div>
                <span className={`status-badge ${isRecording ? "processing" : "completed"}`}>
                    {isRecording ? "Recording" : "Ready"}
                </span>
            </div>

            <div className="card-body">
                {/* Controls */}
                <div className="voice-controls">
                    <button
                        className={`voice-record-btn ${isRecording ? "recording" : ""}`}
                        onClick={() => setIsRecording(!isRecording)}
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
                            {isRecording ? "00:42" : "Last: 03:15"}
                        </div>
                    </div>
                </div>

                {/* Waveform */}
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

                {/* Transcription */}
                <div className="transcription-area">
                    <p>
                        Patient reports <span className="highlight">persistent headache</span> for
                        the past three days, primarily in the{" "}
                        <span className="highlight">frontal region</span>. Pain is described as{" "}
                        <span className="highlight">throbbing</span>, rated{" "}
                        <span className="highlight">6/10</span> on the pain scale. Associated
                        symptoms include <span className="highlight">mild nausea</span> and{" "}
                        <span className="highlight">light sensitivity</span>. No history of trauma.
                        Patient has been taking over-the-counter ibuprofen with partial relief.
                    </p>
                </div>
            </div>
        </div>
    );
}
