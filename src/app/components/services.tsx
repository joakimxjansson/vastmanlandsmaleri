import Image from "next/image";
export default function Services() {
    const services = [
        {
            title: "Innemålning",
            tag: "Inomhus",
            description: "Professionell målning för alla typer av inomhusmiljöer – snabbt, snyggt och hållbart.",
            image: "/images/inne.png",
        },
        {
            title: "Fasadmålning",
            tag: "Utomhus",
            description: "Vi ser till att din fasad får ett hållbart skydd och ett fräscht utseende med rätt färgsystem.",
            image: "/images/ute.png",
        },
        {
            title: "Tapetsering",
            tag: "Detaljer",
            description: "Noggrant tapetseringsarbete som lyfter varje rum med stil och precision.",
            image: "/images/tapetsering.jpg",
        },
        {
            title: "Spackling",
            tag: "Förberedelse",
            description: "Noggrann spackling som säkerställer en jämn och slät yta inför målning eller tapetsering.",
            image: "/images/spackling.png",  // Lägg till en passande bild här
        },
    ];

    return (
        <section id="services" className="bg-gray-200 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                

                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-xl">
                    Vi erbjuder allt inom måleri – från inomhusmålning och fasadmålning till tapetsering och spackling.
                    Kvalitet, noggrannhet och kundnöjdhet är alltid i fokus.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl p-4 shadow hover:shadow-md transition">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width="400"
                                height="400"
                                className="rounded-2xl w-full h-60 object-cover"
                            />
                            <div className="mt-4">
                                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-300 text-gray-700 mb-2">
                                    {service.tag}
                                </span>
                                <h3 className="text-xl text-gray-500 font-semibold">{service.title}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
