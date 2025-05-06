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

export default function AulaPage() {
  const params = useParams();
  const aula = aulas.find(a => a.id === params.id) || aulas[0];

  const [duvida, setDuvida] = useState("");
  const [feedback, setFeedback] = useState("");
  const [mensagemDuvida, setMensagemDuvida] = useState("");
  const [mensagemFeedback, setMensagemFeedback] = useState("");

  function enviarDuvida(e: React.FormEvent) {
    e.preventDefault();
    setMensagemDuvida("Sua dúvida foi enviada! Em breve um instrutor irá responder.");
    setDuvida("");
  }
  function enviarFeedback(e: React.FormEvent) {
    e.preventDefault();
    setMensagemFeedback("Obrigado pelo seu feedback!");
    setFeedback("");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f0f4f8] via-[#e6f7fa] to-[#f9fafb]">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-2 sm:px-4 pt-8 pb-12 flex flex-col gap-8">
        <div className="bg-white/95 p-8 rounded-2xl shadow-2xl border border-[#e0e7ef] backdrop-blur-md">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A535C] mb-2">{aula.titulo}</h1>
          <p className="text-gray-700 mb-6">{aula.descricao}</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-6 bg-black">
            <iframe
              src={aula.video}
              title={aula.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Tire suas dúvidas */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#1A535C] mb-2">Tire suas dúvidas</h2>
            <form onSubmit={enviarDuvida} className="flex flex-col gap-2">
              <textarea
                className="border rounded-lg p-2 min-h-[60px] resize-y focus:outline-none focus:ring-2 focus:ring-[#009FB8]"
                placeholder="Digite sua dúvida sobre a aula..."
                value={duvida}
                onChange={e => setDuvida(e.target.value)}
                required
              />
              <button type="submit" className="self-end px-4 py-2 bg-[#009FB8] text-white rounded-lg hover:bg-[#1A535C] transition-colors font-medium shadow">
                Enviar dúvida
              </button>
              {mensagemDuvida && <span className="text-green-600 text-sm mt-1">{mensagemDuvida}</span>}
            </form>
          </div>

          {/* Feedback */}
          <div>
            <h2 className="text-lg font-semibold text-[#1A535C] mb-2">Deixe seu feedback sobre a aula</h2>
            <form onSubmit={enviarFeedback} className="flex flex-col gap-2">
              <textarea
                className="border rounded-lg p-2 min-h-[60px] resize-y focus:outline-none focus:ring-2 focus:ring-[#009FB8]"
                placeholder="O que achou da aula? Conte sua experiência..."
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                required
              />
              <button type="submit" className="self-end px-4 py-2 bg-[#009FB8] text-white rounded-lg hover:bg-[#1A535C] transition-colors font-medium shadow">
                Enviar feedback
              </button>
              {mensagemFeedback && <span className="text-green-600 text-sm mt-1">{mensagemFeedback}</span>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 