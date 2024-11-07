import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetalleProducto = () => {
    
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const response = await fetch(`/api/items/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el producto');
                }
                const data = await response.json();
                setProducto(data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setError(true);
                setLoading(false);
            }
        };
        obtenerProducto();
    }, [id]);

    const handleComprar = async () => {
        try {
            const compra = { productId: producto.id, quantity: 1 }; 

            const response = await fetch(`/api/compra`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(compra)
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Compra realizada con éxito!");
                setTimeout(() => navigate('/'), 2000);
            } else {
                toast.error(`Error: ${result.message}`);
            }

        } catch (error) {
            console.error("Error:", error);
            toast.error("Hubo un problema con la compra.");
        }
    };

    if (loading) return <h1>Cargando...</h1>;
    if (error) return <h1>Error al obtener el producto</h1>;

    return (
        <>
            <ToastContainer />
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
            <button className="p-3 rounded-r-lg text-md bg-[#1a1a1a]"
                    onClick={handleComprar}>
                Comprar
            </button>
        </>
    );
}

export default DetalleProducto;
