import React from "react";
import { Mail, Facebook, Music } from "lucide-react";

export default function App() {
  return (
    <div className="bg-zinc-900 text-zinc-100 font-mono">
      <section className="min-h-screen bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-2xl border border-zinc-800">
          <h1 className="text-6xl font-extrabold mb-4 tracking-tight">The Beige Hornets</h1>
          <p className="text-xl text-zinc-300">Grungy blues‑rock from the depths of Perth</p>
        </div>
      </section>
      <footer className="bg-black text-center py-6 text-sm border-t border-zinc-700">
        <p>“Lickin’ the gunk off the balls of my eyes”</p>
        <p className="mt-2">© 2025 The Beige Hornets. Powered by React.</p>
      </footer>
    </div>
  );
}
