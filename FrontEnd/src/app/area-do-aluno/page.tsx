"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useState } from "react";

export default function AreaAluno() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-4">
                <div className="w-24 h-24 bg-[#009FB8] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto border-4 border-white">
                  MS
                </div>
                <h2 className="text-xl font-bold mt-3">Maria Silva</h2>
                <p className="text-gray-600 text-sm">Aluno desde Jun/2023</p>
              </div>
              <nav className="space-y-1">
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-[#009FB8]/10 text-[#009FB8] font-medium">
                  <i className="fas fa-home"></i>
                  <span>Dashboard</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                  <i className="fas fa-book-open"></i>
                  <span>Meu Curso</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Agenda</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                  <i className="fas fa-chart-line"></i>
                  <span>Progresso</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-red-500">
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Sair</span>
                </a>
              </nav>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Suporte</h3>
              <p className="text-gray-600 text-sm mb-4">Precisa de ajuda com seu curso? Nossa equipe está aqui para você.</p>
              <button className="w-full bg-[#009FB8] hover:bg-[#1A535C] text-white py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2">
                <i className="fas fa-headset"></i>
                <span>Falar com suporte</span>
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Bem-vinda de volta, Maria!</h1>
              <p className="text-gray-600">Continue seu aprendizado em Dança Contemporânea</p>
            </div>

            {/* Course Overview */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 transition duration-300 hover:shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                       alt="Dança Contemporânea" 
                       className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="inline-block bg-[#009FB8]/10 text-[#009FB8] text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide">Ativo</span>
                      <span className="ml-2 text-gray-600 text-sm">Desde 15/06/2023</span>
                    </div>
                    <div className="text-yellow-500">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Dança Contemporânea: Expressão e Movimento</h2>
                  <p className="text-gray-600 mb-4">Aprenda as técnicas fundamentais da dança contemporânea e desenvolva sua expressão corporal.</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progresso do curso</span>
                      <span>65% completo</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-gradient-to-r from-[#009FB8] to-[#1A535C] rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button className="bg-[#009FB8] hover:bg-[#1A535C] text-white py-2 px-4 rounded-lg transition duration-200 flex items-center space-x-2">
                      <i className="fas fa-play"></i>
                      <span>Continuar aprendendo</span>
                    </button>
                    <button className="border border-[#009FB8] text-[#009FB8] hover:bg-[#009FB8]/10 py-2 px-4 rounded-lg transition duration-200 flex items-center space-x-2">
                      <i className="fas fa-list-ul"></i>
                      <span>Ver módulos</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Módulos do Curso</h2>
                <span className="text-sm text-gray-600">6 de 10 aulas concluídas</span>
              </div>
              
              <div className="space-y-4">
                {/* Module 1 - Completed */}
                <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">Módulo 1: Fundamentos</h3>
                      <p className="text-sm text-gray-600">Conhecendo seu corpo e espaço</p>
                    </div>
                    <span className="text-green-600">
                      <i className="fas fa-check-circle"></i>
                      <span className="ml-1">Concluído</span>
                    </span>
                  </div>
                </div>
                
                {/* Module 2 - Current */}
                <div className="border-l-4 border-[#009FB8] bg-[#009FB8]/10 p-4 rounded-r-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">Módulo 2: Técnicas Básicas</h3>
                      <p className="text-sm text-gray-600">Movimentos essenciais da dança contemporânea</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#009FB8] font-medium">
                        <i className="fas fa-play-circle"></i>
                        <span className="ml-1">Em progresso</span>
                      </span>
                      <button 
                        onClick={() => setExpandedModule(expandedModule === 2 ? null : 2)}
                        className="text-[#009FB8] hover:text-[#1A535C]"
                      >
                        <i className={`fas fa-chevron-${expandedModule === 2 ? 'up' : 'down'}`}></i>
                      </button>
                    </div>
                  </div>
                  
                  {expandedModule === 2 && (
                    <div className="mt-3 ml-6 space-y-3">
                      <div className="flex items-center justify-between p-2 hover:bg-[#009FB8]/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-[#009FB8]/10 text-[#009FB8] flex items-center justify-center">
                            <i className="fas fa-play text-sm"></i>
                          </div>
                          <span className="font-medium">Aula 7: Transições suaves</span>
                        </div>
                        <span className="text-sm text-gray-500">25 min</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-2 hover:bg-[#009FB8]/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                            <i className="fas fa-lock text-sm"></i>
                          </div>
                          <span className="text-gray-400">Aula 8: Uso do espaço tridimensional</span>
                        </div>
                        <span className="text-sm text-gray-400">32 min</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Module 3 - Locked */}
                <div className="border-l-4 border-gray-200 bg-gray-50 p-4 rounded-r-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-400">Módulo 3: Composição</h3>
                      <p className="text-sm text-gray-400">Criando suas próprias sequências de dança</p>
                    </div>
                    <span className="text-gray-400">
                      <i className="fas fa-lock"></i>
                      <span className="ml-1">Bloqueado</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Próximos Eventos</h2>
              
              <div className="space-y-4">
                {/* Event 1 */}
                <div className="flex items-start p-4 border border-[#009FB8]/20 rounded-lg hover:bg-[#009FB8]/5 transition duration-200">
                  <div className="bg-[#009FB8]/10 text-[#009FB8] rounded-lg p-3 text-center mr-4">
                    <div className="font-bold text-lg">15</div>
                    <div className="text-xs uppercase">Jul</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800">Aula ao Vivo: Técnicas Avançadas</h3>
                    <p className="text-sm text-gray-600">Com professora Carla Mendes</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <i className="far fa-clock mr-2"></i>
                      <span>19:00 - 20:30 (Horário de Brasília)</span>
                    </div>
                  </div>
                  <button className="bg-[#009FB8] hover:bg-[#1A535C] text-white py-1 px-3 rounded-lg text-sm transition duration-200">
                    Participar
                  </button>
                </div>
              </div>
              
              <button className="mt-6 w-full border border-dashed border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-700 py-3 rounded-lg transition duration-200">
                <i className="far fa-calendar-plus mr-2"></i>
                Adicionar à minha agenda
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
