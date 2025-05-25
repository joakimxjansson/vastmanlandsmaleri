export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Videobakgrund */}
            <video
                src="/video/herovid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover"
            />

            {/* Mörkt överlägg + innehåll */}
            <div className="absolute inset-0  flex flex-col justify-center items-center text-center px-4  bg-gradient-to-b from-black/70 to-transparent" >
                <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Västmanlands Måleri
                </h1>
                <p className="text-white text-lg md:text-2xl mt-4 max-w-xl drop-shadow">
                    Din pålitliga partner för allt inom målning – inomhus och utomhus.
                </p>
                <a href="#kontakt">
                    <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                        Få en gratis Offert
                    </button>
                </a>
            </div>

            {/* Fade-out till nästa sektion (gray-200) */}
            <div className="absolute bottom-0 left-0 w-full h-62 bg-gradient-to-b from-transparent to-gray-200" />
        </div>
    );
}
