'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

const Services = () => {
  


  return (
    <div className='bg-preto aos'>

   <div className="relative overflow-hidden bg-preto pt-20 pb-32 space-y-24">
   <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-bege  md:text-4xl ">Nossos serviços</h2>
    <div className="relative aos" data-aos='fade-up'>
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rosa">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-bege">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                </path>
                            </svg>
                        </span>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-bege">
                           Aplicativos, Sites e Sistemas:
                        </h2>
                        <p className="mt-4 text-lg text-bege opacity-90">
                            Nosso time de desenvolvimento utiliza tecnologias atuais e faz uso de boas práticas, o que garante um trabalho de qualidade e um processo ágil.
                        </p>
                        <div className="mt-6">
                        <a
                href='#'
                className="inline-block rounded-3xl bg-preto border  border-rosa px-6 py-3 text-sm font-medium text-bege  transition hover:bg-rosa focus:outline-none focus:ring focus:ring-red-400 number-animation  leading-tight"
              >
                Saiba mais
      </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="647" height="486" alt='teste'
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative aos" data-aos='fade-up' >
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rosa">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-bege">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-bege">
                            Marca, Branding e Design:
                        </h2>
                        <p className="mt-4 text-lg text-bege opacity-90">
                        Dê à sua marca uma identidade única e marcante que se destaca no mercado. Nosso time de Design posiciona sua empresa um degrau acima dos seus concorrentes.
                        </p>
                        <div className="mt-6">
                        <a
                href='#'
                className="inline-block rounded-3xl bg-preto border  border-rosa px-6 py-3 text-sm font-medium text-bege  transition hover:bg-rosa focus:outline-none focus:ring focus:ring-red-400 number-animation  leading-tight"
              >
                Saiba mais
      </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-xl ring-1 ring-wjote ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative aos"  data-aos='fade-up'>
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rosa">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-bege">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-bege">
                            Tráfego, Marketing e Posicionamento:
                        </h2>
                        <p className="mt-4 text-lg text-bege opacity-90">
                        Atraia mais clientes e aumente suas vendas com campanhas publicitárias direcionadas. Nosso time de Marketing garante maior visibilidade no mercado para o seu negócio.
                        </p>
                        <div className="mt-6">
                        <a
                href='#'
                className="inline-block rounded-3xl bg-preto border  border-rosa px-6 py-3 text-sm font-medium text-bege  transition hover:bg-rosa focus:outline-none focus:ring focus:ring-red-400 number-animation  leading-tight"
              >
                Saiba mais
      </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="646" height="485" alt='teste'
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                               src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"/>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default Services;
