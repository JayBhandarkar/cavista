export default function PatientOverview() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon teal">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <div>
                        <div className="card-title">Patient Overview</div>
                        <div className="card-subtitle">Current consultation</div>
                    </div>
                </div>
                <span className="status-badge reviewed">Checked In</span>
            </div>

            <div className="card-body">
                {/* Patient Info */}
                <div className="patient-header-row">
                    <div className="patient-avatar">AP</div>
                    <div>
                        <div className="patient-name">Ananya Patel</div>
                        <div className="patient-id">MRN: EMR-2024-08472 · Female · 34 yrs · Blood: B+</div>
                    </div>
                </div>

                {/* Vitals */}
                <div className="patient-vitals">
                    <div className="vital-item">
                        <div className="vital-label">BP</div>
                        <div className="vital-value normal">120/80</div>
                    </div>
                    <div className="vital-item">
                        <div className="vital-label">Heart Rate</div>
                        <div className="vital-value normal">72 bpm</div>
                    </div>
                    <div className="vital-item">
                        <div className="vital-label">Temp</div>
                        <div className="vital-value warning">101.2°F</div>
                    </div>
                    <div className="vital-item">
                        <div className="vital-label">SpO₂</div>
                        <div className="vital-value normal">98%</div>
                    </div>
                </div>

                {/* Tags */}
                <div className="patient-tags">
                    <span className="patient-tag allergy">⚠ Penicillin Allergy</span>
                    <span className="patient-tag condition">Asthma</span>
                    <span className="patient-tag info">Last Visit: Jan 15</span>
                </div>
            </div>
        </div>
    );
}
