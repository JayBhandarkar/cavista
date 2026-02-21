"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import Link from "next/link";

type Role = "doctor" | "patient";

export default function LoginPage() {
    const router = useRouter();
    const [role, setRole] = useState<Role>("doctor");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    async function handleGoogleSignIn() {
        setGoogleLoading(true);
        setError("");
        try {
            const supabase = createClient();
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                },
            });
            if (error) setError(error.message);
        } catch {
            setError("Google sign-in failed. Please try again.");
        } finally {
            setGoogleLoading(false);
        }
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!email.trim() || !password) {
            setError("Please fill in all fields.");
            return;
        }
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const supabase = createClient();
            const { error: authError } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password,
            });
            if (authError) {
                setError(authError.message);
                return;
            }

            // ── Role-exclusivity check (fresh server read, not stale JWT) ──
            const { data: { user: freshUser } } = await supabase.auth.getUser();
            const storedRole = freshUser?.user_metadata?.role as Role | undefined;

            if (!storedRole) {
                // Account has no role yet — save the selected role now
                // (user proved account ownership with correct password)
                await supabase.auth.updateUser({ data: { role } });
            } else if (storedRole !== role) {
                // Role mismatch — sign out immediately
                await supabase.auth.signOut();
                const expected = storedRole === "doctor" ? "Doctor" : "Patient";
                setError(
                    `This email is registered as a ${expected} account. ` +
                    `Please select "${expected}" above to sign in.`
                );
                return;
            }

            setSuccess("Login successful! Redirecting…");
            setTimeout(() => {
                const destination = role === "doctor" ? "/doctor/dashboard" : "/patient/dashboard";
                router.push(destination);
                router.refresh();
            }, 500);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="auth-page">
            {/* ── Left: Branding ── */}
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
                    <h1>Mediq</h1>
                    <p>Smart EMR &amp; Diagnostic Assistant</p>

                    <div className="auth-features">
                        <div className="auth-feature">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>HIPAA‑Compliant Security</span>
                        </div>
                        <div className="auth-feature">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                                <path d="M19 10v2a7 7 0 01-14 0v-2" />
                            </svg>
                            <span>Voice‑Powered Documentation</span>
                        </div>
                        <div className="auth-feature">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            <span>AI‑Powered Diagnostics</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="auth-form-panel">
                <div className="auth-form-container">
                    <div className="auth-form-header">
                        <h2>Welcome back</h2>
                        <p>Sign in to continue to your dashboard</p>
                    </div>

                    {/* Role toggle */}
                    <div className="role-toggle">
                        <button
                            type="button"
                            className={`role-toggle-btn${role === "doctor" ? " active" : ""}`}
                            onClick={() => setRole("doctor")}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="12" y1="18" x2="12" y2="12" />
                                <line x1="9" y1="15" x2="15" y2="15" />
                            </svg>
                            Doctor
                        </button>
                        <button
                            type="button"
                            className={`role-toggle-btn${role === "patient" ? " active" : ""}`}
                            onClick={() => setRole("patient")}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            Patient
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                        {/* Email */}
                        <div className="auth-field">
                            <label htmlFor="email">Email Address</label>
                            <div className="auth-input-wrap">
                                <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 4l-10 8L2 4" />
                                </svg>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder={role === "doctor" ? "doctor@hospital.com" : "patient@email.com"}
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="auth-field">
                            <label htmlFor="password">Password</label>
                            <div className="auth-input-wrap">
                                <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0110 0v4" />
                                </svg>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="auth-toggle-pw"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                                            <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Options row */}
                        <div className="auth-options">
                            <label className="auth-checkbox">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="auth-forgot">Forgot password?</a>
                        </div>

                        <button type="submit" className="auth-submit-btn" disabled={loading}>
                            {loading ? (
                                <span className="auth-spinner" />
                            ) : (
                                `Sign In as ${role === "doctor" ? "Doctor" : "Patient"}`
                            )}
                        </button>

                        {error && <div className="auth-message error">{error}</div>}
                        {success && <div className="auth-message success">{success}</div>}
                    </form>

                    {/* Divider */}
                    <div className="auth-divider">
                        <span>or</span>
                    </div>

                    {/* Google OAuth */}
                    <button
                        type="button"
                        className="auth-google-btn"
                        onClick={handleGoogleSignIn}
                        disabled={googleLoading}
                    >
                        {googleLoading ? <span className="auth-spinner" style={{ borderColor: "rgba(0,0,0,0.15)", borderTopColor: "#444" }} /> : (
                            <>
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Continue with Google
                            </>
                        )}
                    </button>

                    <p className="auth-switch">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup">Create one</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
