'use client';

import React from 'react';
import PageHero from '@/components/ui/PageHero';
import ProjectsGallery from '@/components/projects/ProjectsGallery';
import TeamCTA from '@/components/TeamCTA';
import GlobalIndustries from '@/components/GlobalIndustries';

export default function ProjectsPage() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Our Work"
                subtitle="Projects"
                description="A visual showcase of how we help brands grow, scale, and dominate their industries."
            />
            <GlobalIndustries />
            <ProjectsGallery />
            <TeamCTA />
        </div>
    );
}