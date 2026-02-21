export default function AISummary() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon blue">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a4 4 0 014 4v1a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2V6a4 4 0 014-4z" />
                            <path d="M9 18h6" />
                            <path d="M10 22h4" />
                            <path d="M12 14v4" />
                        </svg>
                    </div>
                    <div>
                        <div className="card-title">AI Clinical Summary</div>
                        <div className="card-subtitle">Auto-generated from transcription</div>
                    </div>
                </div>
                <span className="status-badge completed">Completed</span>
            </div>

            <div className="card-body">
                <div className="summary-section">
                    <div className="summary-label">Chief Complaint</div>
                    <div className="summary-text">
                        Persistent frontal headache for 3 days, throbbing in nature, 6/10 severity.
                    </div>
                </div>

                <div className="summary-section">
                    <div className="summary-label">History of Present Illness</div>
                    <div className="summary-text">
                        34-year-old female presents with a 3-day history of frontal headache.
                        Pain is throbbing, rated 6/10, with associated mild nausea and
                        photophobia. No preceding trauma or recent infections. Partial relief
                        with OTC ibuprofen 400mg. No visual disturbances, neck stiffness,
                        or focal neurological deficits reported.
                    </div>
                </div>

                <div className="summary-section">
                    <div className="summary-label">Review of Systems</div>
                    <div className="summary-text">
                        <strong>Neuro:</strong> Headache (+), photophobia (+), visual changes (−), weakness (−)
                        <br />
                        <strong>GI:</strong> Nausea (+), vomiting (−), abdominal pain (−)
                        <br />
                        <strong>Constitutional:</strong> Low-grade fever (101.2°F), fatigue (+)
                    </div>
                </div>

                <div className="summary-section">
                    <div className="summary-label">Assessment</div>
                    <div className="summary-text">
                        Clinical presentation is consistent with migraine without aura.
                        Differential includes tension-type headache and sinusitis given
                        the low-grade fever. Recommend further evaluation to rule out
                        secondary causes.
                    </div>
                </div>
            </div>
        </div>
    );
}
