export default function PatientAppointmentsPage() {
    return (
        <>
            <div className="page-header"><h1>Appointments</h1><p>Upcoming and past appointments</p></div>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon blue">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                        <div><div className="card-title">My Appointments</div><div className="card-subtitle">Schedule and history</div></div>
                    </div>
                    <span className="status-badge reviewed">Upcoming</span>
                </div>
                <div className="card-body">
                    <div style={{ textAlign: "center", padding: "48px 0", color: "var(--d-text-muted)" }}>
                        <p style={{ fontSize: "0.95rem", fontWeight: 500 }}>No appointments scheduled</p>
                        <p style={{ fontSize: "0.82rem", marginTop: 6 }}>WebSocket: <code>/ws/patient/appointments</code></p>
                    </div>
                </div>
            </div>
        </>
    );
}
