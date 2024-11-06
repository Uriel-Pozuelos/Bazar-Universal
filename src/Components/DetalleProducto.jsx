import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
    
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const producto = async () => {
            try {
                const response = await fetch(`/api/items/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el producto');
                }
                const data = await response.json();
                setProducto(data);
                setLoading(false);

            }catch (error) {
                console.error('Error:', error);
                setError(true);
                setLoading(false);
            }
        } 

        producto();
    }
    , [id]);

    if (loading) {
        return <h1>Cargando...</h1>
    }

    if (error) {
        return <h1>Error al obtener el producto</h1>
    }

    return (
        <div>
            <h1>{producto.title}</h1>
            <img src={producto.thumbnail} alt={producto.title} style={{ width: '100%', height: 'auto' }} />
            <p><strong>Marca:</strong> {producto.brand}</p>
            <p><strong>Categoría:</strong> {producto.category}</p>
            <p><strong>Precio:</strong> ${producto.price}</p>
            <p><strong>Descuento:</strong> {producto.discountPercentage}%</p>
            <p><strong>Descripción:</strong> {producto.description}</p>
            <p><strong>Stock:</strong> {producto.stock}</p>
            <p><strong>Rating:</strong> {producto.rating}</p>
        </div>  
    )
}

export default DetalleProducto;