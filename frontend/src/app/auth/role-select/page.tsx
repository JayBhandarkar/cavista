"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

type Role = "doctor" | "patient";

export default function RoleSelectPage() {
    const router = useRouter();
    const [role, setRole] = useState<Role>("doctor");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleConfirm() {
        setLoading(true);
        setError("");
        try {
            const supabase = createClient();
            const { error: updateError } = await supabase.auth.updateUser({
                data: { role },
            });
            if (updateError) {
                setError(updateError.message);
            } else {
                const destination = role === "doctor" ? "/doctor/dashboard" : "/patient/dashboard";
                router.push(destination);
                router.refresh();
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="auth-page">
            {/* Left branding */}
            <div className="auth-branding">
                <div className="auth-branding-bg">
                    <div className="auth-bg-circle auth-bg-circle-1" />
                    <div className="auth-bg-circle auth-bg-circle-2" />
                </div>
                <div className="auth-branding-content">
                    <div className="auth-brand-logo">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <h1>Cavista</h1>
                    <p>Smart EMR &amp; Diagnostic Assistant</p>
                </div>
            </div>

            {/* Right: role picker */}
            <div className="auth-form-panel">
                <div className="auth-form-container">
                    <div className="auth-form-header">
                        <h2>Choose your role</h2>
                        <p>Select how you will use Cavista. This cannot be changed later.</p>
                    </div>

                    {/* Role cards */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                        {(["doctor", "patient"] as Role[]).map((r) => (
                            <button
                                key={r}
                                type="button"
                                onClick={() => setRole(r)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 16,
                                    padding: "18px 20px",
                                    border: `2px solid ${role === r ? "var(--d-primary)" : "#CBD5E1"}`,
                                    borderRadius: "var(--d-radius)",
                                    background: role === r ? "var(--d-primary-light)" : "#F8FAFC",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    transition: "all 0.2s ease",
                                    width: "100%",
                                }}
                            >
                                <div style={{
                                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                                    background: role === r ? "var(--d-primary)" : "#E2E8F0",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: role === r ? "#fff" : "var(--d-text-muted)",
                                    transition: "all 0.2s ease",
                                }}>
                                    {r === "doctor" ? (
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="12" y1="18" x2="12" y2="12" />
                                            <line x1="9" y1="15" x2="15" y2="15" />
                                        </svg>
                                    ) : (
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: "var(--d-text)", fontSize: "0.95rem", textTransform: "capitalize" }}>{r}</div>
                                    <div style={{ fontSize: "0.78rem", color: "var(--d-text-muted)", marginTop: 2 }}>
                                        {r === "doctor" ? "Physician, specialist, or healthcare provider" : "Patient seeking care or reviewing records"}
                                    </div>
                                </div>
                                {role === r && (
                                    <div style={{ marginLeft: "auto", color: "var(--d-primary)" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    <button
                        className="auth-submit-btn"
                        onClick={handleConfirm}
                        disabled={loading}
                    >
                        {loading ? <span className="auth-spinner" /> : `Continue as ${role === "doctor" ? "Doctor" : "Patient"}`}
                    </button>

                    {error && <div className="auth-message error">{error}</div>}
                </div>
            </div>
        </div>
    );
}
