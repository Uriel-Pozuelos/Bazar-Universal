const Card = ({ producto, isDetalle = false, handleComprar}) => {
    return (
        <div
            className={`border border-gray-300 rounded-lg overflow-hidden p-4 flex flex-col gap-4 h-full ${
                isDetalle ? 'lg:flex-row' : 'lg:flex-col'
            } items-center lg:items-center`}
        >
            <img
                src={producto.thumbnail}
                alt={producto.title}
                className={`rounded-lg h-auto object-cover ${
                    isDetalle
                        ? 'w-full h-full sm:w-1/3 sm:rounded-full'
                        : 'w-full h-full sm:w-1/3 sm:rounded-full'
                }`}
            />

            <div className="flex-1 p-3 text-balance text-lg lg:text-xl lg:space-y-5 space-y-2 text-left h-full">
                <h2 className="lg:text-4xl text-3xl font-semibold mb-5">{producto.title}</h2>
                <p><strong>Descripción:</strong> {producto.description}</p>
                <p><strong>Precio:</strong> ${producto.price}</p>
                <p><strong>Categoría:</strong> {producto.category}</p>
                <p>
                    <strong>Puntuación:</strong> {producto.rating}
                    <span className="text-yellow-500 ml-3">
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

                        <button
                            className="p-3 rounded-lg text-md bg-yellow-400 text-black mt-3 w-full"
                            onClick={handleComprar}
                        >
                            Comprar
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};



export default Card;
