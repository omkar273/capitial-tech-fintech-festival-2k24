/* NODE MODULES */
import AuthPage from '@/features/auth/pages/auth_page.jsx'
import ErrorPage from '@/features/errorpage/ErrorPage.jsx'
import HomePage from '@/features/landing_page/pages/home_page.jsx'
import NewsFeedPage from '@/features/news/pages/news_feed_page'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Chartbox from './features/chartbox/chartbox'
import CompanyDetailsPage from './features/company_analysis/pages/company_details_page.jsx'
import DashboardPage from './features/dashboard/pages/dashboard_page.jsx'
import HighPage from './features/onboarding/pages/highestvolume'
import PrefferencesPage from './features/onboarding/pages/prefferences_page'
import PortfolioPage from './features/portfolio/pages/portfolio_analysis.jsx'
import TaxationPage from './features/portfolio/pages/tax_page.jsx'
import { themeSettings } from './theme.js'




const App = () => {

  const mode = useSelector((state) => state.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isLoggedIn = localStorage.getItem('user') != null;

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path='/auth'
                element={isLoggedIn ? <Navigate to={'/'} /> : < AuthPage />} />

              <Route path='/'
                element={isLoggedIn ? < HomePage /> : <Navigate to={'/auth'} />} />

              <Route path='/dashboard' element={<DashboardPage />} />

              <Route path='/tax' element={<TaxationPage />} />

              <Route path='/news' element={<NewsFeedPage />} />

              <Route path='/chart' element={<Chartbox />} />

              <Route path='/ch' element={<PrefferencesPage />} />

              <Route path='/high' element={<HighPage />} />

              <Route path='/profile' element={<PortfolioPage />} />

              <Route path='/company/:symbol' element={<CompanyDetailsPage />} />

              <Route path='*' element={<ErrorPage />} />

            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App