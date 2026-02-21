export default function PatientTimeline() {
    const events = [
        {
            date: "Feb 21, 2026",
            title: "Current Visit — Migraine Assessment",
            desc: "Persistent frontal headache, 3-day duration. AI summary generated. CT scan ordered.",
            color: "teal" as const,
        },
        {
            date: "Jan 15, 2026",
            title: "Follow-up — Asthma Review",
            desc: "Stable on current inhaler therapy. Pulmonary function tests within normal limits.",
            color: "blue" as const,
        },
        {
            date: "Nov 03, 2025",
            title: "Annual Physical Examination",
            desc: "All vitals normal. Routine blood work ordered. Penicillin allergy confirmed and documented.",
            color: "green" as const,
        },
        {
            date: "Aug 12, 2025",
            title: "Acute Visit — Upper Respiratory Infection",
            desc: "Prescribed azithromycin (avoiding penicillin). Symptoms resolved within 5 days.",
            color: "amber" as const,
        },
    ];

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-left">
                    <div className="card-header-icon blue">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <div>
                        <div className="card-title">Patient History</div>
                        <div className="card-subtitle">Timeline of past visits</div>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="timeline">
                    {events.map((e, i) => (
                        <div className="timeline-item" key={i}>
                            <div className={`timeline-dot ${e.color}`} />
                            <div className="timeline-date">{e.date}</div>
                            <div className="timeline-title">{e.title}</div>
                            <div className="timeline-desc">{e.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
