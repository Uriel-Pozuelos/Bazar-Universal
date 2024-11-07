import {Routes, Route} from 'react-router-dom';
import Productos from './Components/Productos';
import Home from './Components/Home';
import DetalleProducto from './Components/DetalleProducto';
import Compras from './Components/Compras';

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