import React from 'react';
import {createRoot} from "react-dom/client"
import App from "./components/App"
import "./styles/componentsStyle/index.module.css"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

