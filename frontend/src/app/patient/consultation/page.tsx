import VideoPanel from "@/components/VideoPanel";
import VoicePanel from "@/components/VoicePanel";

export default function PatientConsultationPage() {
    return (
        <>
            <div className="page-header">
                <h1>Consultation</h1>
                <p>Virtual & Live Interaction</p>
            </div>
            <div className="dashboard-grid">
                <VideoPanel />
                <VoicePanel />
            </div>
        </>
    );
}
