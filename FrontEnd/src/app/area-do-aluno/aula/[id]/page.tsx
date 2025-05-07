"use client";

import { useState } from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useParams } from "next/navigation";

const aulas = [
  {
    id: "1",
    titulo: "Aula 1: Introdução à Dança",
    descricao: "Conheça os princípios básicos da dança contemporânea, postura e consciência corporal.",
    video: "https://www.youtube.com/embed/2-MBfn8XjIU"
  },
  {
    id: "2",
    titulo: "Aula 2: Alongamento e Aquecimento",
    descricao: "Aprenda exercícios essenciais para preparar o corpo antes de dançar.",
    video: "https://www.youtube.com/embed/1q8gEvbSaxE"
  },
  {
    id: "3",
    titulo: "Aula 3: Passos Básicos",
    descricao: "Vamos praticar os passos fundamentais para iniciantes.",
    video: "https://www.youtube.com/embed/3GwjfUFyY6M"
  },
];

export default function Aula({ params }: { params: { id: string } }) {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Coluna Esquerda (Vídeo e Conteúdo) */}
          <div className="lg:w-3/4 flex flex-col gap-8">
            {/* Player de Vídeo */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Aula {params.id}: Movimentos Básicos de Salsa</h2>
                  <div className="flex space-x-3">
                    <button className="bg-[#009FB8]/10 text-[#009FB8] px-4 py-2 rounded-full text-base font-medium flex items-center">
                      <i className="fas fa-heart mr-2"></i> Favoritar
                    </button>
                    <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-base font-medium flex items-center">
                      <i className="fas fa-share-alt mr-2"></i> Compartilhar
                    </button>
                  </div>
                </div>
                <div className="flex items-center text-base text-gray-500 mb-6">
                  <span className="mr-6"><i className="fas fa-clock mr-2"></i> 15 min</span>
                  <span><i className="fas fa-calendar-alt mr-2"></i> Postado em 10/06/2023</span>
                </div>
                <div className="flex space-x-4 mb-4">
                  <button className="bg-[#009FB8] text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center">
                    <i className="fas fa-play mr-3"></i> Assistir Aula
                  </button>
                  <button className="border border-[#009FB8] text-[#009FB8] px-6 py-3 rounded-lg text-lg font-medium flex items-center">
                    <i className="fas fa-download mr-3"></i> Material de Apoio
                  </button>
                </div>
              </div>
            </div>

            {/* Descrição da Aula */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="fas fa-info-circle text-[#009FB8] mr-3 text-2xl"></i> Sobre esta aula
              </h3>
              <div className="prose max-w-none text-gray-700 text-lg">
                <p>Nesta aula você aprenderá os movimentos fundamentais da salsa, incluindo:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
                  <li>Passo básico de salsa (forward-back basic step)</li>
                  <li>Side breaks (quebra lateral)</li>
                  <li>Cross body lead (condução cruzada)</li>
                  <li>Right turn (giro para direita)</li>
                  <li>Combinação básica para iniciantes</li>
                </ul>
                <p className="mt-4 text-lg">Dica profissional: Pratique cada movimento lentamente antes de tentar a velocidade total. A precisão é mais importante que a velocidade no início.</p>
              </div>
            </div>

            {/* Seção de Perguntas e Respostas */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <i className="fas fa-question-circle text-[#009FB8] mr-3 text-2xl"></i> Tire suas dúvidas
              </h3>
              <div className="mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800 text-lg">Ana Silva</span>
                        <span className="text-sm text-gray-500">10 min atrás</span>
                      </div>
                      <p className="text-gray-700 text-lg">Estou com dificuldade no giro para direita, sempre perco o equilíbrio. Alguma dica?</p>
                    </div>
                    <div className="flex items-center space-x-3 text-base text-gray-500 mt-3 ml-4">
                      <button className="hover:text-[#009FB8]"><i className="far fa-thumbs-up mr-1"></i> Útil</button>
                      <span>•</span>
                      <button className="hover:text-[#009FB8]">Responder</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-800 mb-4 text-lg">Faça sua pergunta</h4>
                <div className="flex space-x-3">
                  <input 
                    type="text" 
                    placeholder="Digite sua dúvida..." 
                    className="flex-1 border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#009FB8] focus:border-transparent"
                  />
                  <button className="bg-[#009FB8] text-white px-6 py-3 rounded-lg text-lg font-medium">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita (Módulos) */}
          <div className="lg:w-1/4">
            <div className="sticky top-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-[#009FB8] text-white px-6 py-4">
                  <h3 className="font-bold flex items-center text-xl">
                    <i className="fas fa-list-ol mr-3"></i> Módulos do Curso
                  </h3>
                </div>
                <div className="h-[32rem] overflow-y-auto">
                  <div className="divide-y divide-gray-200">
                    {/* Módulo 1 */}
                    <div className="p-6">
                      <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setExpandedModule(expandedModule === 1 ? null : 1)}
                      >
                        <h4 className="font-medium text-gray-800 text-lg">Módulo 1: Introdução</h4>
                        <i className={`fas fa-chevron-${expandedModule === 1 ? 'up' : 'down'} text-gray-400`}></i>
                      </div>
                      {expandedModule === 1 && (
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center pl-3 py-2 text-base text-gray-600">
                            <i className="fas fa-check-circle text-green-500 mr-3 text-lg"></i>
                            <span>Aula 1: História da Salsa</span>
                          </div>
                          <div className="flex items-center pl-3 py-2 text-base text-gray-600">
                            <i className="fas fa-check-circle text-green-500 mr-3 text-lg"></i>
                            <span>Aula 2: Postura e Posição</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Módulo 2 (Atual) */}
                    <div className="p-6 bg-[#009FB8]/5">
                      <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setExpandedModule(expandedModule === 2 ? null : 2)}
                      >
                        <h4 className="font-medium text-gray-800 text-lg">Módulo 2: Fundamentos</h4>
                        <i className={`fas fa-chevron-${expandedModule === 2 ? 'up' : 'down'} text-gray-400`}></i>
                      </div>
                      {expandedModule === 2 && (
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center pl-3 py-2 text-base text-gray-600">
                            <i className="fas fa-check-circle text-green-500 mr-3 text-lg"></i>
                            <span>Aula 1: Ritmo e Contagem</span>
                          </div>
                          <div className="flex items-center pl-3 py-2 text-base text-gray-600">
                            <i className="fas fa-check-circle text-green-500 mr-3 text-lg"></i>
                            <span>Aula 2: Passo Básico</span>
                          </div>
                          <div className="flex items-center pl-3 py-2 text-base text-[#009FB8] font-medium border-l-4 border-[#009FB8] bg-[#009FB8]/10">
                            <i className="fas fa-play-circle text-[#009FB8] mr-3 text-lg"></i>
                            <span>Aula 3: Movimentos Básicos</span>
                          </div>
                          <div className="flex items-center pl-3 py-2 text-base text-gray-400">
                            <i className="far fa-circle mr-3 text-lg"></i>
                            <span>Aula 4: Combinações Iniciais</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Módulo 3 */}
                    <div className="p-6">
                      <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setExpandedModule(expandedModule === 3 ? null : 3)}
                      >
                        <h4 className="font-medium text-gray-800 text-lg">Módulo 3: Técnicas Intermediárias</h4>
                        <i className={`fas fa-chevron-${expandedModule === 3 ? 'up' : 'down'} text-gray-400`}></i>
                      </div>
                      {expandedModule === 3 && (
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center pl-3 py-2 text-base text-gray-400">
                            <i className="far fa-lock mr-3 text-lg"></i>
                            <span>Aula 1: Giros Avançados</span>
                          </div>
                          <div className="flex items-center pl-3 py-2 text-base text-gray-400">
                            <i className="far fa-lock mr-3 text-lg"></i>
                            <span>Aula 2: Combinações Criativas</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Progresso */}
                <div className="border-t p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium text-gray-700">Progresso do Curso</span>
                    <span className="text-base font-bold text-[#009FB8]">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#009FB8] h-3 rounded-full transition-all duration-500" style={{ width: '35%' }}></div>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <span>8 de 23 aulas concluídas</span>
                  </div>
                </div>
              </div>

              {/* Informações do Instrutor */}
              <div className="bg-white rounded-xl shadow-md mt-6 p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center text-xl">
                  <i className="fas fa-chalkboard-teacher text-[#009FB8] mr-3 text-2xl"></i> Seu Instrutor
                </h3>
                <div className="flex items-center space-x-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Instructor" className="w-16 h-16 rounded-full border-2 border-[#009FB8]" />
                  <div>
                    <h4 className="font-medium text-gray-800 text-lg">Ricardo Mendes</h4>
                    <p className="text-base text-gray-600">Profissional de dança há 15 anos</p>
                  </div>
                </div>
                <div className="mt-4 text-base text-gray-700">
                  <p>Especialista em ritmos latinos, com experiência internacional em competições de salsa e bachata.</p>
                </div>
                <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg text-base font-medium flex items-center justify-center">
                  <i className="fas fa-envelope mr-3"></i> Enviar Mensagem
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 