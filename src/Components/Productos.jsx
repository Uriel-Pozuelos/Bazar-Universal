import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q') || '';  

    useEffect(() => {
    
        const fetchProductos = async () => {
            try {
                const response = await fetch(`/api/items?q=${searchQuery}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los productos');
                }
                const data = await response.json();
                setProductos(data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, [searchQuery]); 

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Lista de Productos</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="sm:grid-cols-1">
                {productos.map((producto) => (
                    <div key={producto.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                        <img src={producto.thumbnail} alt={producto.title} style={{ width: '100%', height: 'auto' }} />
                        <h2>{producto.title}</h2>
                        <p><strong>Marca:</strong> {producto.brand}</p>
                        <p><strong>Categoría:</strong> {producto.category}</p>
                        <p><strong>Precio:</strong> ${producto.price}</p>
                        <p><strong>Descuento:</strong> {producto.discountPercentage}%</p>
                        <p><strong>Descripción:</strong> {producto.description}</p>
                        <p><strong>Stock:</strong> {producto.stock}</p>
                        <p><strong>Rating:</strong> {producto.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;
