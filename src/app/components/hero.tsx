'use client';
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from '@heroicons/react/24/outline';



export default function Hero() {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black/70 to-transparent">
                <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Västmanlands Måleri
                </h1>
                <p className="text-white text-lg md:text-2xl mt-4 max-w-xl drop-shadow">
                    Din pålitliga partner för allt inom målning – inomhus och utomhus.
                </p>
                <a href="./#contact">
                    <Button className="mt-6 px-6 h-10 py-3  font-semibold rounded-full ">
                        Få en gratis Offert
                    </Button>
                </a>
            </div>

            {/* Fade-out till nästa sektion (gray-200) */}
            <div className="absolute bottom-0 left-0 w-full h-62 bg-gradient-to-b from-transparent to-gray-200" />

            {/* Rund scrollknapp längst ner */}
            <Button
                onClick={scrollToNextSection}
                className="animate-bounce absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-md  transition"
                aria-label="Scrolla ner"
            >
                <ChevronDownIcon className="h-6 w-6" />
            </Button>
        </div>
    );
}
