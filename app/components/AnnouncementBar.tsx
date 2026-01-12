"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
    return (
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white overflow-hidden h-10 flex items-center z-50">
            {/* Gradient Overlay for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-indigo-600 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-indigo-600 to-transparent z-10 pointer-events-none" />

            <div
                className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] items-center"
                style={{ "--duration": "40s", "--gap": "0rem" } as React.CSSProperties}
            >
                {/* Content duplicated for seamless loop */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center mx-4 gap-8">
                        <span className="flex items-center gap-2 font-bold text-sm tracking-wide">
                            🔥 Startup Building Plans starting at ₹15,000/month
                        </span>
                        <span className="text-white/40">|</span>
                        <span className="flex items-center gap-2 font-medium text-sm">
                            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                            Limited-time offers available
                        </span>
                        <Link
                            href="/contact"
                            className="group flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all border border-white/10 hover:border-white/30 backdrop-blur-sm"
                        >
                            Get Started <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <span className="text-white/40">|</span>
                    </div>
                ))}
            </div>

            {/* Second marquee layer for wide screens if needed, but the loop above with 6 items should cover it. 
          Actually, standard CSS marquee usually requires two sets of content. 
          The 'animate-marquee' keyframe usually translates -50% if the content is doubled. 
          If globals.css defines it as -100%, we need enough content to fill screen + 100%. 
          Let's trust the globals.css definition or just duplicate reasonably.
      */}
        </div>
    );
}
