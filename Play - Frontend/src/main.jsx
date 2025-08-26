import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './App.css';
import Routers from './Routers';


createRoot(document.getElementById("root")).render(

<BrowserRouter>
<Routers/>
</BrowserRouter>

)