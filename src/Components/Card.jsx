const Card = ({ producto, isDetalle = false}) => {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden p-4 flex flex-col 
                        lg:flex-row items-center lg:items-start gap-4">

            <img 
                src={producto.thumbnail} 
                alt={producto.title} 
                className="rounded-lg w-full lg:w-1/2 md:w-1/2 sm:w-1/3 sm:rounded-full h-auto object-cover"
                />

            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{producto.title}</h2>
                <p><strong>Descripción:</strong> {producto.description}</p>
                <p><strong>Precio:</strong> ${producto.price}</p>
                <p><strong>Categoría:</strong> {producto.category}</p>
                <p>
                    <strong>Puntuación:</strong> {producto.rating}
                    <span className="text-yellow-500">
                        {Array.from({ length: Math.floor(producto.rating) }).map((_, index) => (
                            <i key={index} className="fas fa-star"></i>
                        ))}
                    </span>
                    </p>    

                {isDetalle && (
                    <>
                        <p><strong>Marca:</strong> {producto.brand}</p>
                        <p><strong>Descuento:</strong> {producto.discountPercentage}%</p>
                        <p><strong>Stock:</strong> {producto.stock}</p>
                    </>
                )}
            </div>    
        </div>
    );
};



export default Card;
