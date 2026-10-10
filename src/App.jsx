import { useEffect, useMemo }       from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Home                         from './pages/home';
import NavigationBar                from './components/navbar/navbar';
import { usePortfolioStore }        from './store/usePortfolioStore';
import { applyThemeMode }           from './utils/theme';
import { MUI_PALETTES, FONT_FAMILY } from './constants/theme';

function App() {
	const themeMode = usePortfolioStore((s) => s.themeMode);
	const muiTheme  = useMemo(
		() => createTheme({ palette: MUI_PALETTES[themeMode], typography: { fontFamily: FONT_FAMILY } }),
		[themeMode]
	);

	useEffect(() => applyThemeMode(themeMode), [themeMode]);

	return (
		<ThemeProvider theme={muiTheme}>
			<div className="App">
				<NavigationBar />
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;
