// components/ContactCard.tsx

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"
export default function ContactCard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                <div className="bg-white shadow-md rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4 text-center md:text-left text-gray-700">Vanliga frågor</h2>
                    <Accordion type="single" collapsible className="space-y-4">

                        <AccordionItem value="item-1" className="border-b pb-2">
                            <AccordionTrigger className="cursor-pointer font-medium">Erbjuder ni ROT-avdrag?</AccordionTrigger>
                            <AccordionContent className="mt-2 text-sm text-gray-600">Ja, vi hjälper dig dra nytta av ROT-avdraget
                                direkt på fakturan.</AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-b pb-2">
                            <AccordionTrigger className="cursor-pointer font-medium">Vad kostar en offert?</AccordionTrigger>
                            <AccordionContent className="mt-2 text-sm text-gray-600">Det är helt gratis att begära en offert hos
                                oss.</AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-b pb-2">
                            <AccordionTrigger className="cursor-pointer font-medium">Erbjuder ni gratis hembesök?</AccordionTrigger>
                            <AccordionContent className="mt-2 text-sm text-gray-600">Ja, vi kommer gärna ut och tittar – utan
                                kostnad.</AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="border-b pb-2">
                            <AccordionTrigger className="cursor-pointer font-medium">Vilka områden jobbar ni i</AccordionTrigger>
                            <AccordionContent className="mt-2 text-sm text-gray-600">Vi är baserade i Västmanland men tar uppdrag i hela Mälardalen.</AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="border-b pb-2">
                            <AccordionTrigger className="cursor-pointer font-medium">Hur snabbt kan ni börja måla?</AccordionTrigger>
                            <AccordionContent className="mt-2 text-sm text-gray-600">Vanligtvis inom en till två veckor beroende på säsong och omfattning.</AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </div>


                <div className="bg-white shadow-md rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-center md:text-left text-gray-700">Offertförfrågan</h2>
                    <p className="text-sm text-gray-600 mb-4 "> Vi svarar vanligtvis inom 24 timmar</p>
                    <form className="space-y-4">
                        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                            <input type="text" placeholder="Förnamn" className="w-full border rounded px-4 py-2"/>
                            <input type="text" placeholder="Efternamn" className="w-full border rounded px-4 py-2"/>
                        </div>
                        <input type="email" placeholder="E-postadress" className="w-full border rounded px-4 py-2"/>
                        <input type="tel" placeholder="Telefonnummer" className="w-full border rounded px-4 py-2"/>
                        <select
                            id="dropdown"

                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Önskad Tjänst
                            </option>
                            <option value="alternativ1">Inomhusmålning</option>
                            <option value="alternativ2">Fasadmålning</option>
                            <option value="alternativ3">Tapetsering</option>
                            <option value="alternativ4">Spackling</option>
                            <option value="alternativ5">Övrigt</option>
                        </select>
                        <textarea placeholder="Beskriv kort vad du behöver hjälp med"
                                  className="w-full border rounded px-4 py-2 h-32 resize-none"></textarea>
                        <Button>Skicka förfrågan</Button>
                    </form>
                </div>

            </div>
        </div>

    );
}
