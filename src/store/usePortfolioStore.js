import { create } from 'zustand';
import { motionValue } from 'motion/react';
import site from '../data/site.json';
import profile from '../data/profile.json';
import experience from '../data/experience.json';
import projects from '../data/projects.json';
import skills from '../data/skills.json';
import education from '../data/education.json';
import certifications from '../data/certifications.json';
import contact from '../data/contact.json';
import { FULL_WIDTH_LAYOUT } from '../constants/layout';
import { filterVisible, pickByIds } from '../utils/data';
import { getInitialThemeMode } from '../utils/theme';
import { THEME_MODES } from '../constants/theme';

const sections = filterVisible(site.sections);

export const usePortfolioStore = create((set) => ({
    // content
    site,
    profile,
    sections,
    columnSections: sections.filter((s) => s.layout !== FULL_WIDTH_LAYOUT),    // right column
    fullWidthSections: sections.filter((s) => s.layout === FULL_WIDTH_LAYOUT), // below the columns
    navItems: sections.filter((s) => s.nav),          // side navigation
    navbarItems: pickByIds(sections, site.navbar), // top bar (desktop)
    experience: filterVisible(experience),
    projects: filterVisible(projects),
    skills: filterVisible(skills),
    education: filterVisible(education),
    certifications: filterVisible(certifications),
    contact,

    // shared UI state
    activeSection: null,
    themeMode: getInitialThemeMode(),
    toggleThemeMode: () => set((s) => ({
        themeMode: s.themeMode === THEME_MODES.dark ? THEME_MODES.light : THEME_MODES.dark,
    })),
    // 0 -> 1 as the page scrolls; drives the portrait swap (right shrinks away, left pops out)
    portraitProgress: motionValue(0),
    setActiveSection: (id) => set({ activeSection: id }),
}));
