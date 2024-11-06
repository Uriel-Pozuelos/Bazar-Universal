import { useEffect, useState } from 'react';

function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        
        // Llama al endpoint para obtener los productos
        fetch('/api/items')  // Asegúrate de que esta URL coincida con tu endpoint en Vercel
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los productos');
                }
                return response.json();
            })
            .then(data => {
                setProductos(data); // Guarda los productos en el estado
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Productos</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
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
