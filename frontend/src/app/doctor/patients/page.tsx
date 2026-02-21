export default function DoctorPatientsPage() {
    return (
        <>
            <div className="page-header">
                <h1>Patients</h1>
                <p>View and manage patient records</p>
            </div>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon teal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                            </svg>
                        </div>
                        <div>
                            <div className="card-title">Patient Registry</div>
                            <div className="card-subtitle">All registered patients</div>
                        </div>
                    </div>
                    <span className="status-badge reviewed">Active</span>
                </div>
                <div className="card-body">
                    <div style={{ textAlign: "center", padding: "48px 0", color: "var(--d-text-muted)" }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 16px", display: "block", opacity: 0.4 }}>
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                        </svg>
                        <p style={{ fontSize: "0.95rem", fontWeight: 500 }}>Patient list coming soon</p>
                        <p style={{ fontSize: "0.82rem", marginTop: 6 }}>WebSocket: <code>/ws/doctor/patients</code></p>
                    </div>
                </div>
            </div>
        </>
    );
}
