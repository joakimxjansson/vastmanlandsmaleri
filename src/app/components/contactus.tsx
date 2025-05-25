// app/kontakta-oss/page.tsx
import { Button } from "@/components/ui/button"
export default function KontaktaOss() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 mt-10">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Kontakta oss</h1>
            <p className="text-center text-gray-600 mb-10">
                Fyll i formuläret nedan så återkommer vi så snart som möjligt.
            </p>

            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Namn</label>
                    <input
                        type="text"
                        name="namn"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">E-post</label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Telefonnummer</label>
                    <input
                        type="tel"
                        name="telefon"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Meddelande</label>
                    <textarea
                        name="meddelande"
                        rows={5}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full text-white font-medium py-2 px-4 rounded-md transition"
                >
                    Skicka
                </Button>
            </form>
        </div>
    );
}
