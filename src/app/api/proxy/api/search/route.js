export async function GET(request) {
    const { searchParams } = new URL(request.url);

    try {
        const queryString = searchParams.toString();
        const response = await fetch(`https://olx.ba/api/search?${queryString}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
        });

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.json({ error: 'Failed to fetch search results' }, { status: 500 });
    }
}