export default function TreatmentPlan() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon green">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z" />
                        </svg>
                    </div>
                    <div>
                        <div className="card-title">Treatment Recommendations</div>
                        <div className="card-subtitle">AI-suggested care plan</div>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="treatment-list">
                    {/* Medications */}
                    <div className="treatment-item">
                        <div className="treatment-icon med">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5" />
                                <rect x="10" y="1" width="4" height="3" rx="0.5" />
                            </svg>
                        </div>
                        <div className="treatment-info">
                            <div className="treatment-name">Sumatriptan 50mg</div>
                            <div className="treatment-detail">
                                Oral, at onset of migraine. Max 200mg/24hrs. Avoid with penicillin allergy noted.
                            </div>
                        </div>
                    </div>

                    <div className="treatment-item">
                        <div className="treatment-icon med">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5" />
                                <rect x="10" y="1" width="4" height="3" rx="0.5" />
                            </svg>
                        </div>
                        <div className="treatment-info">
                            <div className="treatment-name">Ondansetron 4mg</div>
                            <div className="treatment-detail">
                                As needed for nausea, up to 3 times daily. Dissolve on tongue.
                            </div>
                        </div>
                    </div>

                    {/* Procedure */}
                    <div className="treatment-item">
                        <div className="treatment-icon proc">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </div>
                        <div className="treatment-info">
                            <div className="treatment-name">CT Scan — Head (non-contrast)</div>
                            <div className="treatment-detail">
                                To rule out secondary causes given fever and persistent headache. Expedite if symptoms worsen.
                            </div>
                        </div>
                    </div>

                    {/* Follow-up */}
                    <div className="treatment-item">
                        <div className="treatment-icon follow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                        <div className="treatment-info">
                            <div className="treatment-name">Follow-up in 1 week</div>
                            <div className="treatment-detail">
                                Re-assess headache pattern. Review CT results. If migraine confirmed, consider prophylaxis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
