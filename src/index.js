import React, { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// )

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(<StrictMode><App /></StrictMode>);