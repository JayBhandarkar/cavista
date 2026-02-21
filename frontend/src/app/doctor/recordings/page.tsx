export default function DoctorRecordingsPage() {
    return (
        <>
            <div className="page-header">
                <h1>Recordings</h1>
                <p>Voice and session recordings</p>
            </div>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon blue">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                                <path d="M19 10v2a7 7 0 01-14 0v-2" />
                            </svg>
                        </div>
                        <div>
                            <div className="card-title">Session Recordings</div>
                            <div className="card-subtitle">Live via WebSocket</div>
                        </div>
                    </div>
                    <span className="status-badge processing">Recording Ready</span>
                </div>
                <div className="card-body">
                    <div style={{ textAlign: "center", padding: "48px 0", color: "var(--d-text-muted)" }}>
                        <p style={{ fontSize: "0.95rem", fontWeight: 500 }}>No recordings yet</p>
                        <p style={{ fontSize: "0.82rem", marginTop: 6 }}>WebSocket: <code>/ws/doctor/recordings</code></p>
                    </div>
                </div>
            </div>
        </>
    );
}
