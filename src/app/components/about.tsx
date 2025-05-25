'use client';

import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-gray-200 py-16 px-4">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                                Västmanlands Måleri – Din lokala expert på noggrant och hållbart måleri
                            </h2>

                            <p className="mt-6 text-lg text-gray-700 sm:text-xl">
                                Vi är ett måleriföretag med bas i Västmanland som brinner för kvalitet och hantverk. Med
                                öga för detaljer och ett personligt engagemang hjälper vi både privatpersoner och
                                företag att förverkliga sina måleridrömmar – från första penseldrag till färdigt
                                resultat. Vi värdesätter kundens vision och strävar alltid efter ett resultat som håller
                                över tid, både estetiskt och tekniskt.


                            </p>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/images/malarbild2.png"
                            alt="Målare i arbete"
                            width={1000}
                            height={700}
                            className="rounded object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
