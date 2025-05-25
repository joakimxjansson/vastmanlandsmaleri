// components/Footer.tsx
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-100 py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logotyp */}
                <div className="flex-shrink-0">
                    <Image src="/images/logonyy.png" alt="logo" width={160} height={160} />
                </div>

                {/* Kontaktinfo */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold text-white mb-2">Kontakt</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li className="flex justify-center md:justify-start items-center gap-2">
                            <Phone size={16} /> 070-700 98 97
                        </li>
                        <li className="flex justify-center md:justify-start items-center gap-2">
                            <Mail size={16} /> vastmanlandsmaleri@gmail.com
                        </li>
                    </ul>
                </div>

                {/* Sociala medier */}
                <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold text-white mb-2">Följ oss</h3>
                    <div className="flex justify-center md:justify-end gap-4">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                            <Facebook size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-400">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Västmanlands Måleri. Alla rättigheter förbehållna.
            </div>
        </footer>
    )
}
