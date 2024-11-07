import { useEffect, useState } from "react";

const Compras = () => {

    const [compras, setCompras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const obtenerCompras = async () => {
            
            try {
                
                const response = await fetch('/api/compras');
                if (!response.ok) {
                    throw new Error('Error al obtener las compras');
                }
                const data = await response.json();
                setCompras(Object.values(data));
                setLoading(false);

            } catch (error) {
                
                console.error('Error:', error);
                setError(true);
                
                setLoading(false);
            }
        };
        
        obtenerCompras();

    }, []);

    if (loading) return <h1>Cargando compras...</h1>;
    if (error) return <h1>Error al cargar las compras</h1>;

    return (
        <div>
            <h1>Compras</h1>
            <ul>
                {compras.length > 0 ? (
                    compras.map((compra, index) => (
                        <li key={index} className="border-b py-2">
                            <p><strong>ID de Producto:</strong> {compra.productId}</p>
                            <p><strong>Nombre:</strong>{compra.title}</p>
                            <p><strong>Cantidad:</strong> {compra.quantity}</p>
                            <p><strong>Fecha:</strong> {new Date(compra.date).toLocaleString()}</p>
                        </li>
                    ))
                ) : (
                    <p>No se encontraron compras.</p>
                )}
            </ul>
        </div>
    );
}

export default Compras;
