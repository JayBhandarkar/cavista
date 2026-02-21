"use client";

export default function PatientDashboardPage() {
    return (
        <>
            <div className="page-header">
                <h1>Dashboard</h1>
                <p>Your Health Overview</p>
            </div>
            <div className="dashboard-grid">
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-left">
                            <div className="card-header-icon blue">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                                </svg>
                            </div>
                            <div>
                                <div className="card-title">Health Analytics</div>
                                <div className="card-subtitle">Your health metrics</div>
                            </div>
                        </div>
                        <span className="status-badge completed">Active</span>
                    </div>
                    <div className="card-body">
                        <p>Your health metrics and statistics will appear here.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-left">
                            <div className="card-header-icon teal">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                            </div>
                            <div>
                                <div className="card-title">Recent Consultations</div>
                                <div className="card-subtitle">Last 5 visits</div>
                            </div>
                        </div>
                        <span className="status-badge reviewed">Updated</span>
                    </div>
                    <div className="card-body">
                        <p>Last 4-5 consultation records will be displayed here.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
