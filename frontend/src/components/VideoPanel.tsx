"use client";

import { useState } from "react";

export default function VideoPanel() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon purple">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                    </div>
                    <div>
                        <div className="card-title">Virtual Interaction</div>
                        <div className="card-subtitle">Video consultation</div>
                    </div>
                </div>
                <span className={`status-badge ${isActive ? "processing" : "completed"}`}>
                    {isActive ? "Connected" : "Ready"}
                </span>
            </div>

            <div className="card-body">
                <div className="voice-controls">
                    <button
                        className={`voice-record-btn ${isActive ? "recording" : ""}`}
                        onClick={() => setIsActive(!isActive)}
                        aria-label={isActive ? "End call" : "Start call"}
                    >
                        {isActive ? (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="6" width="12" height="12" rx="2" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="23 7 16 12 23 17 23 7" />
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
