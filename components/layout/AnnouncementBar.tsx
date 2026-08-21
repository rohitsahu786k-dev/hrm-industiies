import React from "react";
import Link from "next/link";
import { Announcement } from "@/lib/types/wordpress";
import { ArrowRight, Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  announcements: Announcement[];
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ announcements }) => {
  if (!announcements || announcements.length === 0) return null;
  const activeAnnouncement = announcements[0];

  return (
    <div className="bg-hrm-charcoal text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
      <div className="w-[90%] max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 truncate">
          <Sparkles className="w-3.5 h-3.5 text-hrm-orange animate-pulse flex-shrink-0" />
          <span className="font-medium text-slate-200 truncate">
            {activeAnnouncement.announcement_text}
          </span>
        </div>
        {activeAnnouncement.link_label && (
          <Link
            href={activeAnnouncement.link_url || "/contact"}
            className="hidden sm:inline-flex items-center gap-1 text-hrm-orange hover:text-white font-semibold transition-colors flex-shrink-0"
          >
            <span>{activeAnnouncement.link_label}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
