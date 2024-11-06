export async function GET(request) {
    
    try {

        // Obtener compras de Firebase
        const response = await fetch(`https://daybook-460dd-default-rtdb.firebaseio.com/uriel/sales.json`);
        if (!response.ok) {
            throw new Error('Error al obtener compras de la base de datos');
        }

        const compras = await response.json();

        // Manejar caso de no encontrar compras
        if (!compras || Object.keys(compras).length === 0) {
            return new Response(JSON.stringify({ message: 'No se encontraron compras' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify(compras), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        
        return new Response(JSON.stringify({ error: 'Error al procesar la petición: ' + error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });

    }
}