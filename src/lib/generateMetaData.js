import axios from "axios";

export async function generateMetadata({ params }) {
    const { id } = params;

    try {
        const res = await axios.get(`https://olx.ba/api/listings/${id}`);
        const vehicle = res.data;

        const firstImage = vehicle.images?.[0] || "/default-car.jpg";

        return {
            title: vehicle.title || "Auto Centar FOX",
            description: vehicle.additional?.description || "Saznajte više o ovom vozilu.",
            keywords: [
                vehicle.brand?.name,
                vehicle.model?.name,
                "Auto Centar FOX",
                "cars",
                "helmets",
            ],
            openGraph: {
                title: vehicle.title,
                description: vehicle.additional?.description,
                url: `https://fox-motors.com/vehicles/${id}`,
                images: [
                    {
                        url: firstImage,
                        width: 1200,
                        height: 630,
                        alt: vehicle.title,
                    },
                ],
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title: vehicle.title,
                description: vehicle.additional?.description,
                images: [firstImage],
            },
        };
    } catch (err) {
        return {
            title: "Auto Centar FOX",
            description: "Vozilo nije pronađeno",
        };
    }
}