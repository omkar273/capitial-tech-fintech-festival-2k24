/* NODE MODULES */
import AuthPage from '@/features/auth/auth_page.jsx'
import ErrorPage from '@/features/errorpage/ErrorPage.jsx'
import HomePage from '@/features/landing_page/home_page.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { themeSettings } from './theme.js'

const App = () => {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path='/auth' element={< AuthPage />} />

              <Route path='/' element={< HomePage />} />

              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App