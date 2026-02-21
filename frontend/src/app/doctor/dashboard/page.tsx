import PatientOverview from "@/components/PatientOverview";
import VoicePanel from "@/components/VoicePanel";
import AISummary from "@/components/AISummary";
import DiagnosisSuggestions from "@/components/DiagnosisSuggestions";
import TreatmentPlan from "@/components/TreatmentPlan";
import PatientSummary from "@/components/PatientSummary";
import PatientTimeline from "@/components/PatientTimeline";

export default function DoctorDashboardPage() {
    return (
        <>
            <div className="page-header">
                <h1>Consultation Dashboard</h1>
                <p>Active patient session · AI-assisted documentation</p>
            </div>
            <div className="dashboard-grid">
                <PatientOverview />
                <VoicePanel />
                <div className="full-width"><AISummary /></div>
                <DiagnosisSuggestions />
                <TreatmentPlan />
                <PatientSummary />
                <PatientTimeline />
            </div>
        </>
    );
}
