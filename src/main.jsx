import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RowColLayoutColWidthBreakpointExample from './App.jsx' 
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RowColLayoutColWidthBreakpointExample/>
  </StrictMode>,
)
