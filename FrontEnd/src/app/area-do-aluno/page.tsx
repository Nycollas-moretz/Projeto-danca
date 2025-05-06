"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function AreaAluno() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f0f4f8] via-[#e6f7fa] to-[#f9fafb]">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-2 sm:px-4 pt-8 pb-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full max-w-xs lg:w-1/4 bg-white/90 p-8 rounded-2xl shadow-xl flex flex-col items-center border border-[#e0e7ef] h-max self-start">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-[#009FB8] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg border-4 border-white">
              JD
            </div>
            <h2 className="text-xl font-bold text-gray-800">João da Silva</h2>
            <p className="text-gray-600">Aluno desde Março/2024</p>
          </div>
          <nav className="space-y-2 w-full">
            <a href="#" className="block px-4 py-2 text-[#1A535C] hover:bg-[#009FB8]/10 rounded-lg transition-colors font-medium">
              Meu Curso
            </a>
            <a href="#" className="block px-4 py-2 text-[#1A535C] hover:bg-[#009FB8]/10 rounded-lg transition-colors font-medium">
              Progresso
            </a>
            <a href="#" className="block px-4 py-2 text-[#1A535C] hover:bg-[#009FB8]/10 rounded-lg transition-colors font-medium">
              Certificados
            </a>
          </nav>
        </aside>

        {/* Conteúdo Principal */}
        <section className="flex-1 flex flex-col gap-8">
          {/* Card do Curso */}
          <div className="w-full bg-white/95 p-8 rounded-2xl shadow-2xl border border-[#e0e7ef] backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
              <h1 className="text-3xl font-extrabold text-[#1A535C] tracking-tight">Dança Contemporânea - Básico</h1>
              <span className="px-4 py-1 bg-[#009FB8]/10 text-[#009FB8] rounded-full text-base font-semibold w-max shadow-sm">
                Em andamento
              </span>
            </div>
            {/* Progresso do Curso */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progresso do Curso</span>
                <span className="font-bold text-[#009FB8]">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-[#009FB8] to-[#1A535C] h-3 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            {/* Módulos do Curso */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Módulos do Curso</h2>
              {/* Módulo 1 */}
              <div className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-[#f7fafc]">
                <div>
                  <h3 className="font-medium text-[#1A535C]">Módulo 1: Fundamentos</h3>
                  <p className="text-gray-600 text-sm">Introdução aos movimentos básicos e postura</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓ Concluído</span>
                  <button className="px-3 py-1 bg-[#009FB8] text-white rounded-lg text-sm hover:bg-[#1A535C] transition-colors font-medium shadow">
                    Revisar
                  </button>
                </div>
              </div>
              {/* Módulo 2 */}
              <div className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-[#f7fafc]">
                <div>
                  <h3 className="font-medium text-[#1A535C]">Módulo 2: Técnicas Básicas</h3>
                  <p className="text-gray-600 text-sm">Aprendendo sequências básicas e coordenação</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#009FB8] font-bold">Em andamento</span>
                  <button className="px-3 py-1 bg-[#009FB8] text-white rounded-lg text-sm hover:bg-[#1A535C] transition-colors font-medium shadow">
                    Continuar
                  </button>
                </div>
              </div>
              {/* Módulo 3 */}
              <div className="border rounded-lg p-4 opacity-60 bg-[#f7fafc] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="font-medium text-[#1A535C]">Módulo 3: Composição</h3>
                  <p className="text-gray-600 text-sm">Criando suas próprias sequências de dança</p>
                </div>
                <span className="text-gray-500 font-semibold">Bloqueado</span>
              </div>
            </div>
          </div>
          {/* Próxima Aula */}
          <div className="w-full bg-white/95 p-8 rounded-2xl shadow-2xl border border-[#e0e7ef] backdrop-blur-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Próxima Aula</h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#009FB8]/10 rounded-lg flex items-center justify-center shadow">
                <span className="text-[#009FB8] text-2xl font-bold">15</span>
              </div>
              <div>
                <h3 className="font-medium text-[#1A535C]">Técnicas de Respiração</h3>
                <p className="text-gray-600 text-sm">15 de Março, 2024 - 19:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
