"use client";

import { useState } from "react";

interface Diagnosis {
    code: string;
    name: string;
    description: string;
    confidence: number;
    status: "pending" | "accepted" | "rejected";
}

const initialDiagnoses: Diagnosis[] = [
    {
        code: "G43.909",
        name: "Migraine, unspecified",
        description: "Without aura, not intractable, without status migrainosus",
        confidence: 89,
        status: "pending",
    },
    {
        code: "G44.1",
        name: "Tension-type headache",
        description: "Vascular headache, not elsewhere classified",
        confidence: 62,
        status: "pending",
    },
    {
        code: "J01.90",
        name: "Acute sinusitis, unspecified",
        description: "Considering low-grade fever and frontal headache pattern",
        confidence: 38,
        status: "pending",
    },
];

function getConfidenceLevel(c: number) {
    if (c >= 70) return "high";
    if (c >= 50) return "medium";
    return "low";
}

export default function DiagnosisSuggestions() {
    const [diagnoses, setDiagnoses] = useState(initialDiagnoses);

    function updateStatus(index: number, status: "accepted" | "rejected") {
        setDiagnoses((prev) =>
            prev.map((d, i) =>
                i === index ? { ...d, status: d.status === status ? "pending" : status } : d
            )
        );
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon amber">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 11l3 3L22 4" />
                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                        </svg>
                    </div>
                    <div>
                        <div className="card-title">Diagnosis & ICD-10 Suggestions</div>
                        <div className="card-subtitle">AI-powered clinical coding</div>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="diagnosis-list">
                    {diagnoses.map((d, i) => {
                        const level = getConfidenceLevel(d.confidence);
                        return (
                            <div key={d.code} className="diagnosis-item">
                                <span className="diagnosis-code">{d.code}</span>
                                <div className="diagnosis-info">
                                    <div className="diagnosis-name">{d.name}</div>
                                    <div className="diagnosis-desc">{d.description}</div>
                                </div>
                                <div className="confidence-bar">
                                    <div className={`confidence-value ${level}`}>{d.confidence}%</div>
                                    <div className="confidence-track">
                                        <div
                                            className={`confidence-fill ${level}`}
                                            style={{ width: `${d.confidence}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="diagnosis-actions">
                                    <button
                                        className={`diag-btn ${d.status === "accepted" ? "accept" : ""}`}
                                        onClick={() => updateStatus(i, "accepted")}
                                        aria-label="Accept"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </button>
                                    <button
                                        className={`diag-btn ${d.status === "rejected" ? "reject" : ""}`}
                                        onClick={() => updateStatus(i, "rejected")}
                                        aria-label="Reject"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
