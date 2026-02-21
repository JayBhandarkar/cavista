export default function PatientSettingsPage() {
    return (
        <>
            <div className="page-header"><h1>Settings</h1><p>Patient account preferences</p></div>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon teal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001.08 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1.08z" />
                            </svg>
                        </div>
                        <div><div className="card-title">Preferences</div><div className="card-subtitle">Manage your account</div></div>
                    </div>
                </div>
                <div className="card-body">
                    {[
                        { label: "Personal Information", desc: "Name, DOB, and contact details" },
                        { label: "Notification Preferences", desc: "Appointment reminders and alerts" },
                        { label: "Privacy & Security", desc: "Password and data sharing settings" },
                    ].map((item) => (
                        <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderRadius: "var(--d-radius-sm)", background: "var(--d-bg)", border: "1px solid var(--d-border)", cursor: "pointer", marginBottom: 10 }}>
                            <div>
                                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--d-text)" }}>{item.label}</div>
                                <div style={{ fontSize: "0.78rem", color: "var(--d-text-muted)", marginTop: 2 }}>{item.desc}</div>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--d-text-muted)" }}><polyline points="9 18 15 12 9 6" /></svg>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
