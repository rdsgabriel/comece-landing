'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import comeceIcon from '../../public/icone.svg';
import comeceIcon2 from '../../public/icone2.svg';


const Footer = ({toggleExpand, expanded}) => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
    segment: '',
    description: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://mail-comece.onrender.com/api/v1/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log('success')
        setStatus('success')
      })
      .catch(error => {
        console.error('Erro:', error);
        setStatus('error');
      });
  };

  return (
    <footer className="bg-preto aos" data-aos='fade-up'>
      <div className='hidden'>
      </div>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 appear-animation'>
      {expanded ? (
        <div className='transition-all duration-1000 ease-in-out'>
          <div className="relative">
  <button
    className="absolute top-0 right-0 text-sm font-medium text-bege pr-3 pt-2"
    onClick={toggleExpand}
  >
    <svg
      className="h-4 w-4 md:h-6 md:w-5 transform rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </button>
</div>
<div  className="flex items-center gap-4 rounded-lg bg-rosa shadow-lg transition-all duration-500 p-6 md:p-20">
  <div className='md:w-1/2 hidden md:flex pr-4'>
  <Image
            src={comeceIcon2}
            alt="Logo"
            width={450}
            height={450}
          />
  </div>
  <div className='md:w-1/2'>
  <h3 className="text-2xl font-extrabold tracking-tight leading-tight text-center text-bege md:text-4xl pb-4 ">
      Entraremos em contato o mais rápido possível.
    </h3>
  <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleSubmit}>
  
    <input
      type="text"
        required
          name="fullName"
          placeholder="Nome completo"
          className="border border-bege rounded-full px-4 py-2 text-preto w-full"
          value={formData.fullName}
          onChange={handleChange}
          
    />
    <input
      required
        type="email"
        name="email"
        placeholder="Digite seu email"
        className="border border-bege rounded-full px-4 py-2 text-preto w-full"
        value={formData.email}
        onChange={handleChange}
    />
    <input
      required
       type="tel"
       name="phoneNumber"
       placeholder="Digite seu número de telefone"
       className="border border-bege rounded-full px-4 py-2 text-preto w-full"
       value={formData.phoneNumber}
       onChange={handleChange}
    />
    <form class="w-full">
      <label for="segment" class="block mb-2 text-lg font-bold text-bege text-center">Qual o seu segmento?</label>
      <select id="segment"
            name="segment"
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-full focus:ring-rosa focus:border-rosa block w-full p-2.5"
            value={formData.segment}
            onChange={handleChange}>
       <option value="" disabled>Selecione um segmento</option>
            <option value="SERVICO">Serviço</option>
            <option value="VAREJO">Varejo</option>
            <option value="INDUSTRIA">Indústria</option>
            <option value="ECOMMERCE">E-commerce</option>
            <option value="FOOD_SERVICE">Food Service</option>
            <option value="EDUCACAO">Educação</option>
            <option value="IMOBILIARIO">Imobiliário</option>
            <option value="SAAS">SAAS</option>
            <option value="FINANCAS">Finanças</option>
            <option value="FRANQUIA">Franquia</option>
            <option value="TELECOM">Telecom</option>
            <option value="ENERGIA_SOLAR">Energia Solar</option>
            <option value="TURISMO">Turismo</option>
            <option value="STARTUP">Startup</option>
            <option value="OUTRO">Outro</option>
      </select>
    </form>

<label for="description" class="block text-lg text-bege pt-2 font-bold">Se apresente rapidinho pra gente :)</label>
<textarea id="description"
            name="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Escreva sua mensagem aqui..."
            value={formData.description}
            onChange={handleChange}></textarea>

    <button
      type="submit"
      className="inline-flex items-center gap-2 rounded-full border border-bege bg-rosa px-8 py-1 text-bege hover:bg-bege hover:text-rosa focus:outline-none focus:ring active:bg-rosa/90"
    >
      Enviar
    </button>
    {status === 'success' && <p className="text-bege font-black text-center mt-4">Formulário enviado com sucesso!</p>}
  {status === 'error' && <p className="text-bege font-black mt-4 text-center ">Ocorreu um erro ao enviar o formulário. Tente novamente.</p>}
  </form>
  </div>
    
</div>

        </div>
       
       
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-lg bg-rosa shadow-lg sm:flex-row sm:justify-between transition-all duration-500 p-6">
            <strong className="text-xl text-bege sm:text-xl">Faça sua próxima melhor decisão!</strong>
            <a
            id='lets'
              className="inline-flex items-center gap-2 rounded-full border border-bege bg-rosa px-8 py-3 text-bege hover:bg-bege hover:text-rosa focus:outline-none focus:ring active:bg-rosa/90"
              onClick={toggleExpand}
            >
              <button className="text-sm font-medium">Lets Get Started</button>
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}

    <div className="mt-16 flex justify-evenly md:grid md:grid-cols-1 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-bege">About Us</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-bege transition hover:text-bege/75" href="#">
              Company History
            </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> Meet the Team </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#">
              Employee Handbook
            </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> Careers </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-bege">Our Services</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-bege transition hover:text-bege/75" href="#">
              Web Development
            </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> Web Design </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> Marketing </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> Google Ads </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left hidden md:block">
        <p className="text-lg font-medium text-bege ">Resources</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> Online Guides </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#">
              Conference Notes
            </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> Forum </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> Downloads </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#">
              Upcoming Events
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left hidden md:block">
        <p className="text-lg font-medium text-bege ">Helpful Links</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> FAQs </a>
          </li>

          <li>
            <a className="text-bege transition hover:text-bege/75" href="#"> Support </a>
          </li>

          <li>
            <a
              className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
              href="#"
            >

              <span className="relative flex h-2 w-3">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                ></span>
                <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-16">
      

      <div className="mt-16 sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-rosa sm:justify-start">
        <Image
            src={comeceIcon}
            alt="Logo"
            width={92}
            height={92}
          />
        </div>
        <ul className="flex justify-center gap-6 pt-10 pb-5 md:pt-0 md:pb-0 md:pl-36">
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-rosa transition hover:text-red-500/75"
          >
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-rosa transition hover:text-red-500/75"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-rosa transition hover:text-red-500/75"
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-rosa transition hover:text-red-500/75"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        
      </ul>
        <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
          Comece &copy; 2022. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;

