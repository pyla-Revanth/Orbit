import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'

const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;

if(!VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY');
}

createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
        <App />
    </ClerkProvider>
)
