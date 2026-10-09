import { create } from 'zustand';
import { motionValue } from 'motion/react';
import site from '../data/site.json';
import profile from '../data/profile.json';
import experience from '../data/experience.json';
import projects from '../data/projects.json';
import skills from '../data/skills.json';
import education from '../data/education.json';
import certifications from '../data/certifications.json';
import { filterVisible, pickByIds } from '../utils/data';

const sections = filterVisible(site.sections);

export const usePortfolioStore = create((set) => ({
    // content
    site,
    profile,
    sections,
    navItems: sections.filter((s) => s.nav),          // side navigation
    navbarItems: pickByIds(sections, site.navbar), // top bar (desktop)
    experience: filterVisible(experience),
    projects: filterVisible(projects),
    skills: filterVisible(skills),
    education: filterVisible(education),
    certifications: filterVisible(certifications),

    // shared UI state
    activeSection: null,
    // 0 -> 1 as the page scrolls; drives the flying portrait and its landing space
    portraitProgress: motionValue(0),
    setActiveSection: (id) => set({ activeSection: id }),
}));
