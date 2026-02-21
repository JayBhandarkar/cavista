"use client";

import { useAuth } from "@/components/AuthProvider";

export default function TopBar() {
    const { user } = useAuth();
    const displayName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "User";
    const initials = displayName.substring(0, 2).toUpperCase();

    return (
        <header className="topbar">
            {/* Search */}
            <div className="topbar-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input type="text" placeholder="Search patients, records, diagnoses..." />
            </div>

            {/* Right Actions */}
            <div className="topbar-actions">
                {/* Notifications */}
                <button className="topbar-btn" aria-label="Notifications">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                    <span className="notif-dot" />
                </button>

                {/* Help */}
                <button className="topbar-btn" aria-label="Help">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                </button>

                <div className="topbar-divider" />

                {/* Profile */}
                <div className="topbar-profile">
                    <div className="topbar-profile-avatar">{initials}</div>
                    <div className="topbar-profile-info">
                        <div className="name">{displayName}</div>
                    </div>
                </div>
            </div>
        </header>
    );
}
