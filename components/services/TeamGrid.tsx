import { Facebook, Twitter, Instagram, Youtube } from "../SocialIcons";
import Link from "next/link";
import ChevronIcon from "./ChevronIcon";

const teamMembers = [
  { id: 1, name: "DAVID BRANDON", role: "Engine Specialist" },
  { id: 2, name: "KATHERINE LEGGE", role: "Design Engineer" },
  { id: 3, name: "FERNANDO ALONSO", role: "Engine Specialist" },
  { id: 4, name: "MARIO ANDRETTI", role: "Design Engineer" },
  { id: 5, name: "TOM KRISTENSEN", role: "Engine Specialist" },
  { id: 6, name: "EMILY ROBINSON", role: "Design Engineer" },
];

export default function TeamGrid() {
  return (
    <div className="mt-16 w-full">
      {/* Subtitle Pattern */}
      <div className="flex items-center gap-3 mb-6">
        <ChevronIcon className="w-8 h-3" />
        <h3 className="text-white font-bold text-lg md:text-2xl uppercase tracking-wider">
          Our Expert Mechanics
        </h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col group">
            
            {/* Image Placeholder */}
            <div className="w-full aspect-[3/4] bg-[#000000] rounded-xl relative overflow-hidden mb-6 border border-[#222]">
              
              {/* Fake Silhouette Silhouette Placeholder */}
              <div className="absolute inset-0 flex items-end justify-center opacity-10">
                 <svg width="80%" height="80%" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2ZM4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V22H4V20Z"/>
                 </svg>
              </div>
              
              {/* Hover Social Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                   <Link key={i} href="#" className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-primary)] transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                     <Icon className="w-4 h-4" />
                   </Link>
                 ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col text-center">
              <span className="text-[var(--color-primary)] text-xs uppercase font-bold tracking-widest mb-2">
                {member.role}
              </span>
              <span className="text-white text-xl font-bold uppercase tracking-wider group-hover:text-[var(--color-primary)] transition-colors">
                {member.name}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
