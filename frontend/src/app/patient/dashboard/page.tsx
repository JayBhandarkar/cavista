import PatientSummary from "@/components/PatientSummary";
import PatientTimeline from "@/components/PatientTimeline";

export default function PatientDashboardPage() {
    return (
        <>
            <div className="page-header">
                <h1>My Health Dashboard</h1>
                <p>Your health overview and recent activity</p>
            </div>
            <div className="dashboard-grid">
                <PatientSummary />
                <PatientTimeline />
            </div>
        </>
    );
}
