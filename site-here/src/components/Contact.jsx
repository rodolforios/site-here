import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_aztcw2i', form.current, 'mwrxi90VATdLlapkV')
      .then((result) => {
          alert('Mensagem enviada');
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };


    return (

        <div className='p-2'>
            <section className="py-6 bg-gray-800 text-gray-50" id='contact' >
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold mb-10">Entre em contato</h1>

                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Rua João Papa XIII 114 , Pq Ortolândia, Hortolândia, SP</span>
                            </p>
                            {/* <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+55 (19) 9 9413-5694</span>
                            </p> */}
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>contato@hereit.com.br</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1">Nome Completo</span>
                            <input type="text" name="user_name" placeholder="Digite seu nome" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 ring-white border p-2 bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Endereço de e-mail</span>
                            <input type="email" name="user_email" placeholder="Digite seu E-mail" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 ring-white border p-2 bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Mensagem</span>
                            <textarea rows="3" name="message" placeholder='Digite sua mensagem' className="block w-full rounded-md focus:ring focus:ring-opacity-75 ring-white border bg-gray-800 p-2"></textarea>
                        </label>
                        <input type="submit" value="Enviar" className="self-center px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-rose-500 text-white focus:ring-rose-500 hover:ring-rose-500"/>
                    </form>
                </div>
            </section>
        </div>)
}

export default Contact