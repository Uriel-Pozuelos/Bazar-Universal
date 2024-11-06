import {Routes, Route} from 'react-router-dom';
import Productos from './Components/Productos';
import Home from './Components/Home';

function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
        </Routes>
    )
}

export default AppRoutes;