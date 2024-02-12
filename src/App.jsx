/* NODE MODULES */
import ErrorPage from '@/features/errorpage/ErrorPage.jsx'
import HomePage from '@/features/landing_page/home_page.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthPage from './features/auth/pages/auth_page.jsx'
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

              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App