export default function AnalyticsPage() {
    return (
        <>
            <div className="page-header">
                <h1>Analytics</h1>
                <p>Performance metrics and insights</p>
            </div>

            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon amber">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                        </div>
                        <div>
                            <div className="card-title">Analytics Dashboard</div>
                            <div className="card-subtitle">Usage and outcome metrics</div>
                        </div>
                    </div>
                    <span className="status-badge pending">Beta</span>
                </div>
                <div className="card-body">
                    <div style={{ textAlign: "center", padding: "48px 0", color: "var(--d-text-muted)" }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 16px", display: "block", opacity: 0.4 }}>
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                        <p style={{ fontSize: "0.95rem", fontWeight: 500 }}>Analytics coming soon</p>
                        <p style={{ fontSize: "0.82rem", marginTop: 6 }}>Charts and metrics will appear here</p>
                    </div>
                </div>
            </div>
        </>
    );
}
