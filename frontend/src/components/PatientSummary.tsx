export default function PatientSummary() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon teal">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                    </div>
                    <div>
                        <div className="card-title">Patient-Friendly Summary</div>
                        <div className="card-subtitle">Plain language for the patient</div>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="patient-summary-text">
                    <p>
                        <strong>Dear Ananya,</strong>
                    </p>
                    <p style={{ marginTop: "10px" }}>
                        Based on today&apos;s visit, your headache symptoms are most likely caused by
                        a <strong>migraine</strong>. This is a type of headache that causes throbbing
                        pain, often with nausea and sensitivity to light — which matches what you
                        described.
                    </p>
                    <p style={{ marginTop: "10px" }}>
                        We&apos;ve prescribed <strong>Sumatriptan</strong> to help relieve the headache when
                        it starts, and <strong>Ondansetron</strong> for the nausea. We&apos;d also like you
                        to get a <strong>CT scan of your head</strong> to make sure nothing else is
                        causing the headaches.
                    </p>
                    <p style={{ marginTop: "10px" }}>
                        Please come back in <strong>one week</strong> so we can review the scan results
                        and see how you&apos;re feeling. If your headache gets much worse or you develop
                        new symptoms like vision changes, please visit the emergency department right away.
                    </p>
                </div>

                <div className="summary-actions">
                    <button className="summary-action-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                        Copy
                    </button>
                    <button className="summary-action-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 6 2 18 2 18 9" />
                            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                            <rect x="6" y="14" width="12" height="8" />
                        </svg>
                        Print
                    </button>
                    <button className="summary-action-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}
