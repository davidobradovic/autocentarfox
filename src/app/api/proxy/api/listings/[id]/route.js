export async function GET(request, { params }) {
    const { id } = params;

    try {
        const response = await fetch(`https://olx.ba/api/listings/${id}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
        });

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.json({ error: 'Failed to fetch listing' }, { status: 500 });
    }
}