import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import '@fontsource-variable/inter/wght.css'
import '@fontsource/caveat/600.css'
import '@fontsource/caveat/700.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
