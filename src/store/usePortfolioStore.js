import { create } from 'zustand';
import site from '../data/site.json';
import profile from '../data/profile.json';
import experience from '../data/experience.json';
import projects from '../data/projects.json';
import skills from '../data/skills.json';
import education from '../data/education.json';
import certifications from '../data/certifications.json';
import { filterVisible } from '../utils/data';

const sections = filterVisible(site.sections);

export const usePortfolioStore = create((set) => ({
    // content
    site,
    profile,
    sections,
    navItems: sections.filter((s) => s.nav),
    experience: filterVisible(experience),
    projects: filterVisible(projects),
    skills: filterVisible(skills),
    education: filterVisible(education),
    certifications: filterVisible(certifications),

    // shared UI state
    activeSection: null,
    mobileMenuOpen: false,
    setActiveSection: (id) => set({ activeSection: id }),
    toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
    closeMobileMenu: () => set({ mobileMenuOpen: false }),
}));
