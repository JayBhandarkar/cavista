export default function DoctorReportsPage() {
    return (
        <>
            <div className="page-header"><h1>Reports</h1><p>Clinical reports and summaries</p></div>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon green">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
                            </svg>
                        </div>
                        <div><div className="card-title">Clinical Reports</div><div className="card-subtitle">Generated summaries</div></div>
                    </div>
                    <span className="status-badge completed">Up to date</span>
                </div>
                <div className="card-body">
                    <div style={{ textAlign: "center", padding: "48px 0", color: "var(--d-text-muted)" }}>
                        <p style={{ fontSize: "0.95rem", fontWeight: 500 }}>No reports yet</p>
                        <p style={{ fontSize: "0.82rem", marginTop: 6 }}>WebSocket: <code>/ws/doctor/reports</code></p>
                    </div>
                </div>
            </div>
        </>
    );
}
