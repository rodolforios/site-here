











<div className="sm:flex flex-wrap justify-center items-center text-center gap-12 my-20 ">





    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6   shadow-lg rounded-lg border-b-2 border-transparent hover:border-b-rose-500">
        <h2 className='text-2xl my-3'>Contatos:</h2>
        <p>E-mail: contato@hereit.com.br</p>
        <p>Cel: +55 (19) 9 9413-5694</p>
        <h2 className='text-2xl my-3'>Endereço:</h2>
        <p>Rua João Papa XIII, 405</p>
        <p>Pq Ortolândia,</p>
        <p>Hortolândia, SP</p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6  bg-white shadow-lg rounded-lg border-b-2 border-transparent hover:border-b-rose-500">
        <Maps />
    </div>
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6  bg-white shadow-lg rounded-lg border-b-2 border-transparent hover:border-b-rose-500">
        <form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div>
                <label htmlFor="name" className="text-sm">Nome completo</label>
                <input id="name" type="text" placeholder="" className="w-full p-3 rounded  bg-white border" />
            </div>
            <div>
                <label htmlFor="email" className="text-sm">E-mail</label>
                <input id="email" type="email" className="w-full p-3 rounded  bg-white border" />
            </div>
            <div>
                <label htmlFor="message" className="text-sm">Menssagem</label>
                <textarea id="message" rows="3" className="w-full p-3 rounded  bg-white border"></textarea>
            </div>
            <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded  bg-rose-600 hover:bg-rose-500 text-white">Enviar</button>
        </form>
    </div>





</div>