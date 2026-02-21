"use client";

export default function PatientHistoryPage() {
    return (
        <>
            <div className="page-header">
                <h1>History</h1>
                <p>Your consultation records</p>
            </div>
            <div className="dashboard-grid">
                <div className="card full-width">
                    <div className="card-header">
                        <div className="card-header-left">
                            <div className="card-header-icon green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                            </div>
                            <div>
                                <div className="card-title">Consultation History</div>
                                <div className="card-subtitle">Your medical records</div>
                            </div>
                        </div>
                        <span className="status-badge completed">All Records</span>
                    </div>
                    <div className="card-body">
                        <p>Your consultation ID, interaction reports, date and time records will be displayed here.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
