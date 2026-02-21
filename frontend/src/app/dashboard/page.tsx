import PatientOverview from "@/components/PatientOverview";
import VoicePanel from "@/components/VoicePanel";
import AISummary from "@/components/AISummary";
import DiagnosisSuggestions from "@/components/DiagnosisSuggestions";
import TreatmentPlan from "@/components/TreatmentPlan";
import PatientSummary from "@/components/PatientSummary";
import PatientTimeline from "@/components/PatientTimeline";

export default function DashboardPage() {
    return (
        <>
            {/* Header */}
            <div className="page-header">
                <h1>Consultation Dashboard</h1>
                <p>Active patient session · AI-assisted documentation</p>
            </div>

            {/* Grid */}
            <div className="dashboard-grid">
                {/* Row 1: Patient + Voice */}
                <PatientOverview />
                <VoicePanel />

                {/* Row 2: AI Summary (full width) */}
                <div className="full-width">
                    <AISummary />
                </div>

                {/* Row 3: Diagnosis + Treatment */}
                <DiagnosisSuggestions />
                <TreatmentPlan />

                {/* Row 4: Patient Summary + Timeline */}
                <PatientSummary />
                <PatientTimeline />
            </div>
        </>
    );
}
