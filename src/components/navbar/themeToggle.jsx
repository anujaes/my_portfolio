import { IconButton, Tooltip }  from '@mui/material';
import DarkModeOutlined         from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined        from '@mui/icons-material/LightModeOutlined';
import { usePortfolioStore }    from '../../store/usePortfolioStore';
import { THEME_MODES }          from '../../constants/theme';

function ThemeToggle() {
    const themeMode       = usePortfolioStore((s) => s.themeMode);
    const toggleThemeMode = usePortfolioStore((s) => s.toggleThemeMode);
    const isDark = themeMode === THEME_MODES.dark;
    const label  = isDark ? 'Switch to light theme' : 'Switch to dark theme';

    return (
        <Tooltip title={label}>
            <IconButton onClick={toggleThemeMode} aria-label={label} color="inherit" sx={{ ml: { xs: 0, md: 1 } }}>
                {isDark ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton>
        </Tooltip>
    );
}

export default ThemeToggle;
