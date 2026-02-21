"use client";

export default function HistoryPage() {
    const patients = [
        { id: "P001", name: "John Doe", lastVisit: "2024-01-15", reports: 3, status: "Active" },
        { id: "P002", name: "Jane Smith", lastVisit: "2024-01-14", reports: 5, status: "Active" },
        { id: "P003", name: "Mike Johnson", lastVisit: "2024-01-10", reports: 2, status: "Completed" },
        { id: "P004", name: "Sarah Williams", lastVisit: "2024-01-08", reports: 4, status: "Active" },
        { id: "P005", name: "David Brown", lastVisit: "2024-01-05", reports: 6, status: "Completed" },
        { id: "P006", name: "Emily Davis", lastVisit: "2024-01-03", reports: 3, status: "Active" },
    ];

    return (
        <>
            <div className="page-header">
                <h1>Patient History</h1>
                <p>View patient records and consultation history</p>
            </div>

            <div className="card">
                <div className="card-header">
                    <div className="card-header-left">
                        <div className="card-header-icon teal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                                <path d="M16 3.13a4 4 0 010 7.75" />
                            </svg>
                        </div>
                        <div>
                            <div className="card-title">Patient Records</div>
                            <div className="card-subtitle">All patient consultation history</div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {patients.map((patient) => (
                            <div key={patient.id} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '16px',
                                background: 'var(--d-bg)',
                                borderRadius: 'var(--d-radius-sm)',
                                border: '1px solid var(--d-border-light)',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--d-primary)';
                                e.currentTarget.style.background = 'var(--d-primary-light)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--d-border-light)';
                                e.currentTarget.style.background = 'var(--d-bg)';
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, var(--d-primary), #14B8A6)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontWeight: '700',
                                        fontSize: '0.9rem'
                                    }}>
                                        {patient.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: '600', color: 'var(--d-text)', fontSize: '0.95rem' }}>
                                            {patient.name}
                                        </div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--d-text-muted)', marginTop: '2px' }}>
                                            ID: {patient.id} • Last Visit: {patient.lastVisit}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--d-primary)' }}>
                                            {patient.reports}
                                        </div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--d-text-muted)' }}>
                                            Reports
                                        </div>
                                    </div>
                                    <span className={`status-badge ${patient.status === 'Active' ? 'processing' : 'completed'}`}>
                                        {patient.status}
                                    </span>
                                    <button style={{
                                        padding: '8px 16px',
                                        border: '1px solid var(--d-primary)',
                                        borderRadius: 'var(--d-radius-sm)',
                                        background: 'transparent',
                                        color: 'var(--d-primary)',
                                        fontFamily: 'var(--font)',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--d-primary)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = 'var(--d-primary)';
                                    }}>
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
