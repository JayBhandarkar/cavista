export default function PatientPrescriptionsPage() {
    return (
        <>
            <div className="page-header"><h1>Prescriptions</h1><p>Your medications and prescriptions</p></div>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon green">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                            </svg>
                        </div>
                        <div><div className="card-title">Prescriptions</div><div className="card-subtitle">Active and past medications</div></div>
                    </div>
                </div>
                <div className="card-body">
                    <div style={{ textAlign: "center", padding: "48px 0", color: "var(--d-text-muted)" }}>
                        <p style={{ fontSize: "0.95rem", fontWeight: 500 }}>No prescriptions yet</p>
                        <p style={{ fontSize: "0.82rem", marginTop: 6 }}>WebSocket: <code>/ws/patient/prescriptions</code></p>
                    </div>
                </div>
            </div>
        </>
    );
}
