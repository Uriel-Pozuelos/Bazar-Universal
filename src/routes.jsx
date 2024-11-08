import {Routes, Route} from 'react-router-dom';
import Productos from './pages/Productos';
import Home from './pages/Home';
import DetalleProducto from './pages/DetalleProducto';
import Compras from './pages/Compras';

function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path='/detalle-producto/:id' element={<DetalleProducto />} />
            <Route path='/compras' element={<Compras /> } />
        </Routes>
    )
}

export default AppRoutes;