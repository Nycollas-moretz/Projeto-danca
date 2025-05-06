'use client';

import LoginForm from "@/Components/LoginForm";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";



export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#009FB8] to-[#1b7685] flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}