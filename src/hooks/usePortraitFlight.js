import { useMediaQuery }        from '@mui/material';
import { useReducedMotion }     from 'motion/react';
import { DESKTOP_MEDIA_QUERY }  from '../constants/layout';

// The flying portrait runs on the two-column desktop layout,
// unless the visitor prefers reduced motion.
export function usePortraitFlight() {
    const isDesktop     = useMediaQuery(DESKTOP_MEDIA_QUERY);
    const reducedMotion = useReducedMotion();
    return isDesktop && !reducedMotion;
}
