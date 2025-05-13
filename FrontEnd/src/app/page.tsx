"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full bg-white py-4 px-12 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="flex items-center">
          <h1 className="text-[#1A535C] text-2xl font-bold">DançaRitmo</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#inicio"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault(); 
              document.getElementById('inicio')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="text-[#1A535C] hover:text-[#009FB8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
          
          >
            Início
          </a>
          <a
            href="#cursos"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault(); // Evita o recarregamento da página
              document.getElementById('cursos')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="text-[#1A535C] hover:text-[#009FB8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
          
          >
            Curso
          </a>
          <a
            href="#professores"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault(); // Evita o recarregamento da página
              document.getElementById('professores')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="text-[#1A535C] hover:text-[#009FB8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
          
          
          >
            Professores
          </a>
          <a
            href="#sobre"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault(); // Evita o recarregamento da página
              document.getElementById('sobre')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="text-[#1A535C] hover:text-[#009FB8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
          
          >
            Sobre
          </a>
          <a
            href="#depoimentos"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault(); // Evita o recarregamento da página
              document.getElementById('depoimentos')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="text-[#1A535C] hover:text-[#009FB8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
          
          >
            Depoimentos
          </a>
        </nav>
        <button className="md:hidden text-[#1A535C] focus:outline-none">
          <i className="fas fa-bars text-2xl"></i>
        </button>
        <div className="flex items-center space-x-4">
          <a
            href="/login"
            data-readdy="true"
            className="bg-[#009FB8] text-white px-4 py-2 rounded-button font-medium hover:bg-[#1A535C] transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Login
          </a>
        </div>
      </header>
      {/* Hero Section */}
      <section id="inicio" className="relative py-20 overflow-hidden min-h-[600px] ">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%2520dancers%2520performing%2520in%2520a%2520modern%2520studio%2520with%2520soft%2520gradient%2520lighting%252C%2520elegant%2520movements%2520captured%2520in%2520motion%252C%2520showing%2520passion%2520and%2520artistry%252C%2520warm%2520tones%2520on%2520left%2520side%2520fading%2520to%2520cooler%2520blues%2520on%2520right%252C%2520spacious%2520contemporary%2520dance%2520floor&width=1440&height=600&seq=1&orientation=landscape"
            alt="Dançarinos profissionais"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A535C]/90 via-[#009FB8]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYxMCIvPjwvc3ZnPg==')] opacity-30 "></div>
        </div>
        <div className="container mx-auto px-6  relative z-10   text-center">
          <div className="   text-center text-white">
            <h1 className="text-5xl font-bold mb-8 leading-tight animate-pulse">
              Aprenda a Dançar <br /> com Alegria e Ritmo(aqui é para mudar)
            </h1>
            <p className="text-xl mb-12">
              Descubra o prazer da dança em um ambiente acolhedor e
              profissional. <br />Nossos instrutores especializados vão guiar você em
              cada passo. o(aqui é para mudar)
            </p>
            <button className="bg-[#009FB8] text-white px-8 py-3 rounded-button text-lg font-medium hover:bg-white hover:text-[#1A535C] transition-all duration-300 cursor-pointer whitespace-nowrap rounded-md">
              Comece Agora
            </button>
          </div>
        </div>
      </section>
      <section
        id="cursos"
        className="py-20 bg-gradient-to-b from-gray-50 to-[#009FB8]/10 relative min-h-screen"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGnpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMxQTUzNUMxMCIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          {" "}
          {/* Adicionei o z-index aqui */}
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-[#1A535C] mb-4">
              Nossos Cursos em Destaque o(aqui é para mudar)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nossa variedade de cursos de dança para todos os níveis,
              do iniciante ao avançado.(aqui é para mudar)
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-64 sm:h-80 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=couple%2520dancing%2520salsa%2520with%2520passion%2520and%2520energy%252C%2520colorful%2520lighting%252C%2520professional%2520dance%2520studio%2520setting%252C%2520elegant%2520movements%252C%2520dynamic%2520pose%252C%2520clean%2520background%2520with%2520soft%2520gradient%252C%2520high%2520quality%2520photograph&width=800&height=600&seq=2&orientation=landscape"
                  alt="Salsa"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A535C] mb-2">
                  Salsa
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Aprenda os movimentos sensuais e rítmicos da salsa com nossos
                  instrutores especializados. Ideal para todos os níveis.(aqui é
                  para mudar)
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                  <span className="text-[#009FB8] font-medium text-lg">
                    A partir de R$150/mês(aqui é para mudar)
                  </span>
                  <button className="w-full sm:w-auto bg-[#1A535C] text-white px-6 py-3 rounded-button hover:bg-[#009FB8] transition-colors duration-300 cursor-pointer whitespace-nowrap">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Teachers Section */}
      <section
  id="professores"
  className="py-20 bg-gradient-to-r from-[#009FB8]/5 to-gray-50 relative min-h-screen"
>
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDlGQjgxMCIvPjwvc3ZnPg==')] opacity-20"></div>

  <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
    {/* 1. Título mais para cima */}
    <div className="text-center mb-6 mt-4">
      <h2 className="text-4xl font-bold text-[#1A535C]">
        Conheça Nossos Professores
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Instrutores profissionais e apaixonados pela dança, prontos para compartilhar seu conhecimento.
      </p>
    </div>

    {/* 2. Swiper ocupa o resto do espaço e fica centralizado verticalmente */}
    <div className="flex-grow flex items-center">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        pagination={{ clickable: true }}
        className="teacher-swiper w-full"
      >
        {/* Teacher 1 */}
        <SwiperSlide>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden pb-6">
            <div className="h-80 sm:h-[32rem] relative overflow-hidden">
              <img
                src="/Assets/fotoSte.jpg"
                alt="Stefany Ramos"
                className="w-full h- object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A535C] mb-1">
                Ste
              </h3>
              <p className="text-[#009FB8] font-medium mb-3">Especialista em Salsa</p>
              <p className="text-gray-600 text-sm sm:text-base">
              Stefany Ramos é professora, dançarina e coreógrafa. <br />
Natural do Rio Grande do Sul, iniciou seus estudos aos 9 anos com a Dança do Ventre, modalidade que a levou a conquistar o bicampeonato brasileiro de Danças Árabes pela LIBRAF, nos anos de 2015 e 2016. <br />

Aos 13 anos, teve seu primeiro contato com a Dança de Salão, paixão que se consolidou com a mudança para o Rio de Janeiro aos 18 anos, onde passou a se dedicar ao estudo do Samba de Gafieira. Entre 2018 e 2020, integrou a equipe da renomada Escola de Dança Jaime Arôxa, atuando como assistente na unidade de Botafogo. Em 2022, participou de um dos momentos mais emblemáticos da cultura brasileira: o show em comemoração aos 50 anos de carreira da cantora Alcione, realizado no Theatro Municipal do Rio de Janeiro. <br />

Atualmente, Stefany é graduanda em Licenciatura em Dança pela Universidade Federal do Rio de Janeiro (UFRJ) e possui registro profissional (DRT 006907/RJ). <br />

Ao lado de seu parceiro Marcelinho, com quem trabalha há mais de três anos, realiza apresentações, ministra aulas particulares para alunos de diferentes partes do mundo e desenvolve um projeto social de Dança de Salão nas comunidades do Pavão-Pavãozinho e Cantagalo, na zona sul carioca. O projeto oferece aulas gratuitas para moradores locais, reforçando o papel transformador da dança na vida das pessoas. Em 2022, a dupla também participou do Copa Pra Sambar, competição de Samba de Gafieira organizada por Kadu Vieira, no Rio de Janeiro.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Teacher 2 */}
        <SwiperSlide>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden pb-6">
            <div className="h-64 sm:h-[32rem] overflow-hidden">
              <img
                src="/Assets/fotoMarcelinho.jpg"
                alt="Carlos Santos"
                className="w-full h-[56rem] object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A535C] mb-1">
                Marcelinho
              </h3>
              <p className="text-[#009FB8] font-medium mb-3">Especialista em Bachata</p>
              <p className="text-gray-600 text-sm sm:text-base">
              Marcelinho é dançarino, professor e coreógrafo, com uma trajetória que une talento, carisma e compromisso social. <br />
Iniciou sua jornada na dança aos 6 anos de idade, através do projeto Criança Esperança. Desde cedo, demonstrou seu potencial artístico ao participar de programas de televisão, como os da apresentadora Xuxa, na TV Globo.
<br />
Formando em Educação Física pelo IBMR, no Rio de Janeiro, Marcelinho construiu uma carreira sólida, passando por instituições de destaque como a Academia Déborah Colker e integrando a Cia Gafieira Maluca, sob a direção de Gustavo Reis. <br />
Em 2025, foi um dos professores convidados do evento Todo Mundo Samba, referência no cenário do Samba de Gafieira.
<br />
Em parceria com Ste, com quem atua há mais de três anos, compôs o elenco de competidores da Copa Pra Sambar em 2022, competição promovida por Kadu Vieira, além de realizar apresentações e aulas para alunos do Brasil e do exterior.
<br />
Juntos, idealizam e coordenam um projeto social de Dança de Salão nas comunidades do Pavão-Pavãozinho e Cantagalo, na zona sul do Rio de Janeiro, oferecendo aulas gratuitas para moradores locais. O projeto reafirma a dança como ferramenta de inclusão, identidade e transformação social.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>
      {/* Video and About Section */}
      <section
        id="sobre"
        className="min-h-screen py-20 bg-gradient-to-r from-[#009FB8]/5 to-gray-600 relative flex items-center "
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMxQTUzNUMxMCIvPjwvc3ZnPg==')] opacity-20 "></div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col justify-start h-full">
    {/* Título mais próximo do topo */}
    <h2 className="text-4xl font-bold text-[#1A535C] mb-10 text-center mt-2">
      Nossa História e Missão
    </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-28 ">
            
            <div className="lg:w-1/2 ">
            
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl ">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20dance%20studio%20with%20modern%20interior%20design%2C%20large%20mirrors%2C%20wooden%20floors%2C%20ambient%20lighting%2C%20high%20quality%20photograph%20showing%20empty%20dance%20space%20with%20artistic%20lighting&width=800&height=450&seq=15&orientation=landscape"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#009FB8] transition-colors duration-300 cursor-pointer">
                    <i className="fas fa-play text-[#1A535C] text-3xl"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative z-10">
              
              <p className="text-xl text-gray-600 mb-6">
              Somos Ste e Marcelinho, dançarinos e professores apaixonados pelo Samba de Gafieira.
              Unimos técnica, experiência e propósito para levar a dança até você, onde estiver.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-heart text-[#009FB8] text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#1A535C]">
                      Raízes diferentes, mesmo sonho
                    </h4>
                    <p className="text-gray-600">
                      Ste do sul, Marcelinho do Rio - caminhos distintos que se encontram na dança
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-users text-[#009FB8] text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#1A535C]">
                      Vivencia e dedicação
                    </h4>
                    <p className="text-gray-600">
                      Anos de estudo, palcos, projetos sociais e ensino dentro e fora do Brasil
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-star text-[#009FB8] text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#1A535C]">
                      Dançar para transformar
                    </h4>
                    <p className="text-gray-600">
                      a dança às comunidades, aos palcos e agora ao mundo, com propósito, identidade e amor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*testemunhas*/}
        <section
      id="depoimentos"
      className="py-20 bg-[#1b7685]  relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTVoMzB2MzBIMTV6IiBzdHJva2U9IiMwMDlGQjgxMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDlGQjgxMCIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A535C] mb-4">
              O Que Nossos Alunos Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como a DançaRitmo tem transformado a vida de nossos
              alunos.
            </p>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            className="testimonial-swiper"
          >
            {/* Testimonial 1 */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=portrait%2520of%2520a%2520smiling%2520young%2520woman%252C%2520natural%2520lighting%252C%2520casual%2520attire%252C%2520friendly%2520expression%252C%2520clean%2520background%252C%2520professional%2520headshot%252C%2520high%2520quality%2520photograph&width=100&height=100&seq=9&orientation=squarish"
                      alt="Ana Silva"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A535C]">
                      Ana Silva
                    </h4>
                    <p className="text-sm text-gray-500">Aluna de Salsa</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-600 italic flex-grow">
                  Como casal, procurávamos uma atividade para fazer juntos. O
                  tango foi perfeito! O Ricardo é um professor incrível e a
                  escola tem uma estrutura excelente. Já indicamos para vários
                  amigos.
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 2 */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=portrait%2520of%2520a%2520smiling%2520middle%2520aged%2520man%252C%2520natural%2520lighting%252C%2520casual%2520attire%252C%2520friendly%2520expression%252C%2520clean%2520background%252C%2520professional%2520headshot%252C%2520high%2520quality%2520photograph&width=100&height=100&seq=10&orientation=squarish"
                      alt="Pedro Oliveira"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A535C]">
                      Pedro Oliveira
                    </h4>
                    <p className="text-sm text-gray-500">Aluno de Forró</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <p className="text-gray-600 italic flex-grow">
                  Como casal, procurávamos uma atividade para fazer juntos. O
                  tango foi perfeito! O Ricardo é um professor incrível e a
                  escola tem uma estrutura excelente. Já indicamos para vários
                  amigos.
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 3 */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=portrait%2520of%2520a%2520smiling%2520young%2520couple%252C%2520natural%2520lighting%252C%2520casual%2520attire%252C%2520friendly%2520expression%252C%2520clean%2520background%252C%2520professional%2520headshot%252C%2520high%2520quality%2520photograph&width=100&height=100&seq=11&orientation=squarish"
                      alt="Marcos e Júlia"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A535C]">
                      Marcos e Júlia
                    </h4>
                    <p className="text-sm text-gray-500">Alunos de Tango</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-600 italic flex-grow">
                  Como casal, procurávamos uma atividade para fazer juntos. O
                  tango foi perfeito! O Ricardo é um professor incrível e a
                  escola tem uma estrutura excelente. Já indicamos para vários
                  amigos.
                </p>
              </div>
            </SwiperSlide>
            {/* Testimonial 4 */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=portrait%2520of%2520a%2520smiling%2520older%2520woman%252C%2520natural%2520lighting%252C%2520elegant%2520casual%2520attire%252C%2520friendly%2520expression%252C%2520clean%2520background%252C%2520professional%2520headshot%252C%2520high%2520quality%2520photograph&width=100&height=100&seq=12&orientation=squarish"
                      alt="Luísa Mendes"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A535C]">
                      Luísa Mendes
                    </h4>
                    <p className="text-sm text-gray-500">Aluna de Samba</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-600 italic flex-grow">
                  Como casal, procurávamos uma atividade para fazer juntos. O
                  tango foi perfeito! O Ricardo é um professor incrível e a
                  escola tem uma estrutura excelente. Já indicamos para vários
                  amigos.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DançaRitmo(mudar aqui)</h3>
              <p className="text-gray-300 mb-4">
                Transformando vidas através da dança desde 2010. Venha fazer
                parte da nossa comunidade!(mudar aqui)
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#cursos"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Cursos
                  </a>
                </li>
                <li>
                  <a
                    href="#professores"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Professores
                  </a>
                </li> <li>
                  <a
                    href="#sobre"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Sobre
                  </a>
                </li> <li>
                  <a
                    href="#depoimentos"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Depoimentos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Curso</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Salsa
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                  <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-2"></i>
                  <span>(11) 5555-1234</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-2"></i>
                  <span>contato@dancaritmo.com.br</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock mt-1 mr-2"></i>
                  <span>Seg-Sex: 9h-21h, Sáb: 9h-18h</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2025 DançaRitmo. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Suporte
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Back to top button */}
      <a
        href="#inicio"
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#009FB8] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1A535C] transition-colors duration-300 cursor-pointer"
      >
        <i className="fas fa-chevron-up"></i>
      </a>
    </div>
  );
}
