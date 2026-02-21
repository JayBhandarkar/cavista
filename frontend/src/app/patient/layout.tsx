import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

export default function PatientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <TopBar />
                <div className="dashboard-content">{children}</div>
            </div>
        </div>
    );
}
