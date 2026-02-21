export default function DoctorVideoCallPage() {
    return (
        <>
            <div className="page-header">
                <h1>Video Call</h1>
                <p>Start or manage a video consultation with a patient</p>
            </div>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon blue">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="23 7 16 12 23 17 23 7" />
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                        </div>
                        <div>
                            <div className="card-title">Video Consultation</div>
                            <div className="card-subtitle">WebRTC-powered patient calls</div>
                        </div>
                    </div>
                    <span className="status-badge pending">Coming Soon</span>
                </div>
                <div className="card-body">
                    <div style={{ textAlign: "center", padding: "64px 0", color: "var(--d-text-muted)" }}>
                        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 20px", display: "block", opacity: 0.4 }}>
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                        <p style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8 }}>Video call feature coming soon</p>
                        <p style={{ fontSize: "0.82rem" }}>Will connect via WebSocket at <code>/ws/doctor/video</code></p>
                    </div>
                </div>
            </div>
        </>
    );
}
