export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;

    try {
        const response = await fetch(`https://olx.ba/vehicles?page=${page}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
        });

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.json({ error: 'Failed to fetch vehicles' }, { status: 500 });
    }
}