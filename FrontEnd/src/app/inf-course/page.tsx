"use client";
import style from "@/Styles/PagSobre.module.css";
import Header from "../../Components/Header";
import { motion } from "framer-motion";

const SobreCurso = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section
        className={
          " text-white py-32 md:py-48  flex items-center bg-blue-400"
        }
      >
        <div className="container mx-auto text-center ">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Liberte seu corpo através da dança
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Descubra a arte do movimento com nosso curso de dança contemporânea
            para todos os níveis
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300"
            >
              Comece Agora
            </a>
           
          </div>
        </div>
      </section>

      {/* Sobre o curso*/}

      <section
        className={`${style.herobg} hero-gradient pt-24 pb-16 md:pt-32 md:pb-24  `}
      >
        <div className="max-w-6xl mx-auto px-4 text-center ">
          <h2 className="text-4xl font-bold mb-3 text-gray-800 md:text-5xl">
            Sobre o Curso
          </h2>
          <div className="h-2 w-35 rounded-full bg-[#1A535C] mx-auto mb-12"></div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 mr-8">
              <img
                src="Assets/fotoSte.jpg"
                alt="Sobre o curso"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="md:w-1/2 text-2xl">
              <h3 className="mb-6 text-2xl font-bold">
                Transforme seu movimento em arte
              </h3>
              <p className="text-gray-600 mb-4">
                O curso{" "}
                <span className="font-semibold text-purple-600">
                  Dança Contemporânea Expressiva
                </span>{" "}
                foi desenvolvido para quem deseja explorar os limites do
                movimento e da expressão corporal, seja como hobby ou
                profissionalmente.
              </p>
              <p className="text-gray-600 mb-6">
                Com uma abordagem inovadora que combina técnica, improvisação e
                consciência corporal, você desenvolverá não apenas habilidades
                de dança, mas também autoconhecimento e criatividade.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-3"></i>
                  <span className="text-gray-700">
                    Duração: 6 meses (120 horas)
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-3"></i>
                  <span className="text-gray-700">
                    Nível: Iniciante a Intermediário
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-3"></i>
                  <span className="text-gray-700">Suporte individualizado</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-3"></i>
                  <span className="text-gray-700">
                    Material didático exclusivo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentacao dos modulos*/}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className={`${style.module} bg-gray-50 py-20 h-screen`}
>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-3 md:text-5xl">
              Modulos do curso
            </h2>
            <div className="h-2 w-48 mx-auto bg-blue-950 rounded-full mb-16"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-2xl mb-22">
              Nosso programa completo é dividido em módulos progressivos que
              desenvolvem suas habilidades de forma gradual e consistente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*Modulo one */}
            <div
              className={`${style.moduleCard} bg-white p-8 rounded-xl shadow-lg transition duration-300 hover:scale-105 `}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shoe-prints text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-6">Fundamentos da dança</h3>
              <p className="text-xl mb-4 text-gray-700">
                Domine os princípios básicos da dança contemporânea, incluindo
                alinhamento postural, consciência corporal e qualidade de
                movimento.
              </p>
              <ul className="space-y-2 text-gray-600 ">
              <li className="flex items-center"><i></i>Técnicas básicas de chão
              </li>
              <li className="flex items-center"><i></i>Fluxo e respiração
              </li>
              <li className="flex items-center"><i></i>Improvisação guiada
              </li>
              </ul>
            </div>
            {/*Modulo 2 */}
            <div
              className={`${style.moduleCard} bg-white p-8 rounded-xl shadow-lg transition duration-300 hover:scale-105`}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shoe-prints text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-6">Fundamentos da dança</h3>
              <p className="text-xl mb-4 text-gray-700">
                Domine os princípios básicos da dança contemporânea, incluindo
                alinhamento postural, consciência corporal e qualidade de
                movimento.
              </p>
              <ul className="space-y-2 text-gray-600 ">
              <li className="flex items-center"><i></i>Técnicas básicas de chão
              </li>
              <li className="flex items-center"><i></i>Fluxo e respiração
              </li>
              <li className="flex items-center"><i></i>Improvisação guiada
              </li>
              </ul>
            </div>
            {/*Modulo 3 */}
            <div
              className={`${style.moduleCard} bg-white p-8 rounded-xl shadow-lg transition duration-300 hover:scale-105 `}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shoe-prints text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-6">Fundamentos da dança</h3>
              <p className="text-xl mb-4 text-gray-700">
                Domine os princípios básicos da dança contemporânea, incluindo
                alinhamento postural, consciência corporal e qualidade de
                movimento.
              </p>
              <ul className="space-y-2 text-gray-600 ">
              <li className="flex items-center"><i></i>Técnicas básicas de chão
              </li>
              <li className="flex items-center"><i></i>Fluxo e respiração
              </li>
              <li className="flex items-center"><i></i>Improvisação guiada
              </li>
              </ul>
            </div>
          </div>
        </div>
        </motion.section>

        {/*área do aluno */}
        <section id="saibamais" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Área do Aluno</h2>
                <div className="h-2 w-45 rounded-full bg-[#1A535C] mx-auto mb-10"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">Conheça melhor nossa plataforma e como funciona a experiência dos alunos.</p>
            </div>
            
            
            </div>
            </section>

      <footer className="bg-[#1b7685] py-12 text-white">
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
        
     
    </div>
  );
};

export default SobreCurso;
