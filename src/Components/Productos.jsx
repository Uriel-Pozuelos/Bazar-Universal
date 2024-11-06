import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Productos() {
    const [productos, setProductos] = useState([]);
    const location = useLocation();

    const searchParam = new URLSearchParams(location.search)

    const search = searchParam.get('search');

    useEffect(() => {
        
        // Fetch al endpoint /api/items para obtener los productos
        fetch('/api/items')  
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los productos');
                }
                return response.json();
            })
            .then(data => {
                const productos = data.filter((producto) => {
                    producto.title.toLowerCase().includes(search.toLowerCase()) || 
                    producto.brand.toLowerCase().includes(search.toLowerCase())
                })
                setProductos({ productos });
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, [search]);

    return (
        <div>
            <h1>Lista de Productos</h1>
            <button style={{
                    display: 'grid', 
                    gap: '20px',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' 
                }}
                >
                {productos.map((producto) => (
                    <Link   key={producto.id} 
                            style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}
                            to={`/detalle-producto/${producto.id}`}>
                        <img src={producto.thumbnail} alt={producto.title} style={{ width: '100%', height: 'auto' }} />
                        <h2>{producto.title}</h2>
                        <p><strong>Marca:</strong> {producto.brand}</p>
                        <p><strong>Categoría:</strong> {producto.category}</p>
                        <p><strong>Precio:</strong> ${producto.price}</p>
                        <p><strong>Descuento:</strong> {producto.discountPercentage}%</p>
                        <p><strong>Descripción:</strong> {producto.description}</p>
                        <p><strong>Stock:</strong> {producto.stock}</p>
                        <p><strong>Rating:</strong> {producto.rating}</p>
                    </Link>
                ))}
            </button>
        </div>
    );
}

export default Productos;
