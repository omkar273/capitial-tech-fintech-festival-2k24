/* NODE MODULES */
import React, { useMemo } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from './theme.js'
import { useSelector } from 'react-redux'
import ErrorPage from '@/pages/ErrorPage/ErrorPage.jsx'
import HomePage from '@/pages/HomePage/HomePage.jsx'

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