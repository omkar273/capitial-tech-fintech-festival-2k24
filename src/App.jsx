/* NODE MODULES */
import ErrorPage from '@/features/errorpage/ErrorPage.jsx'
import HomePage from '@/features/landing_page/pages/home_page.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthPage from './features/auth/pages/auth_page.jsx'
import CompanyDetailsPage from './features/company_analysis/pages/company_details_page.jsx'
import DashboardPage from './features/dashboard/pages/dashboard_page.jsx'
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