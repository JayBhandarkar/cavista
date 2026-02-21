import PatientSummary from "@/components/PatientSummary";
import PatientTimeline from "@/components/PatientTimeline";

export default function DoctorDashboardPage() {
    return (
        <>
            <div className="page-header">
                <h1>Dashboard</h1>
                <p>Analytics & Recent Consultations</p>
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
                                <div className="card-title">Analytics Overview</div>
                                <div className="card-subtitle">Performance metrics</div>
                            </div>
                        </div>
                        <span className="status-badge completed">Active</span>
                    </div>
                    <div className="card-body">
                        <p>Total consultations, patient stats, and performance metrics will appear here.</p>
                    </div>
                </div>
                <PatientSummary />
                <PatientTimeline />
            </div>
        </>
    );
}
