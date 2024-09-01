import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header'
import Content from './content'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
  </StrictMode>,
)
