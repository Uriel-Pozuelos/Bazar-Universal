export async function POST(request) {

    try {

        // Obtener datos de la compra
        const body = await request.json();

        //Validar datos de la compra 
        if (!body.productId || !body.quantity) {
            return new Response(JSON.stringify({ success: false, message: 'Datos no validos' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Enviar la compra a Firebase
        const response = await fetch('https://daybook-460dd-default-rtdb.firebaseio.com/uriel/sales.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...body, date: new Date().toISOString() }),
        });

        if (!response.ok) {
            throw new Error('Error al registrar la compra en la base de datos');
        }

        // Respuesta de creada exitosamente
        return new Response(JSON.stringify({ success: true }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        
        return new Response(JSON.stringify({ success: false, message: 'Error al procesar la peticipón: ' + error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });

    }
}