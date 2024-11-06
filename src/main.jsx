import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReloadPrompt from './ReloadPrompt.jsx'
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ReloadPrompt />
    <App />
  </StrictMode>
)
