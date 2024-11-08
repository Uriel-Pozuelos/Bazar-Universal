import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../Components/Card";
import Search from "../Components/Search";

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

            let images = producto.images[0];
            

            console.log("Producto:", producto);
            console.log("Imagenes:", images);
            
            const compra = {
                productId: producto.id, 
                title: producto.title,
                price: producto.price,
                description: producto.description,
                brand: producto.brand,
                stock: producto.stock,
                category: producto.category,
                images,
                thumbnail: producto.thumbnail,
                quantity: 1 
            }; 
            

            const response = await fetch(`/api/addCompra`, {
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
            console.error("Detalles del error:", error.message);
            toast.error("Error de compra: " + error.message);

        }
    };

    if (loading) return <h1 className="text-4xl">Cargando productos...</h1>;
    if (error) return <h1 className="text-4xl">Error al obtener el producto</h1>;

    return (
        <>
            <div className='flex items-center space-x-3 w-full mb-5'>
                <img 
                    src="/shopping-bags-65b616.webp" 
                    alt="Bazar Universal" 
                    className="img-fluid w-[10%] h-[10%] lg:w-12 cursor-pointer"
                    onClick={() => navigate('/compras')} 
                />
                <Search />
            </div>
            <ToastContainer />
            <Card producto={producto} isDetalle={true} handleComprar={handleComprar}  />
            
        </>
    );
}

export default DetalleProducto;
