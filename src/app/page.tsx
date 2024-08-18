import {
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/justin.png" width={70} height={70} alt="Album image" />
              <strong>This is Justin Bieber</strong>
              <button className="w-11 h-11 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/eminem.jpg" width={70} height={70} alt="Album image" />
              <strong>This is Eminem</strong>
              <button className="w-11 h-11 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img
                src="/tweeknd.jpg"
                width={70}
                height={70}
                alt="Album image"
              />
              <strong>This is The Weeknd</strong>
              <button className="w-11 h-11 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/matue.webp" width={70} height={70} alt="Album image" />
              <strong>This is Matuê</strong>
              <button className="w-11 h-11 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/brazil.jpg" width={70} height={70} alt="Album image" />
              <strong>Top 50 - Brasil</strong>
              <button className="w-11 h-11 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img
                src="/eletronica.jpg"
                width={70}
                height={70}
                alt="Album image"
              />
              <strong>Eletronica</strong>
              <button className="w-11 h-11 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Vinicius Viana
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/matue.webp"
                className="w-full"
                width={70}
                height={70}
                alt="Album image"
              />
              <strong className="font-semibold">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Matuê, Teto, Kayblack
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/eminem.jpg"
                className="w-full"
                width={70}
                height={70}
                alt="Album image"
              />
              <strong className="font-semibold">Daily mix 2</strong>
              <span className="text-sm text-zinc-400">
                Eminem, Snoop Dogg, Akon
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/tweeknd.jpg"
                className="w-full"
                width={70}
                height={70}
                alt="Album image"
              />
              <strong className="font-semibold">Daily mix 3</strong>
              <span className="text-sm text-zinc-400">
                The Weeknd, Travis Scott, Daft Punk
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/justin.png"
                className="w-full"
                width={70}
                height={70}
                alt="Album image"
              />
              <strong className="font-semibold">Daily mix 4</strong>
              <span className="text-sm text-zinc-400">
                Justin Bieber, Post Malone, The kid Laroi
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/eletronica.jpg"
                className="w-full"
                width={70}
                height={70}
                alt="Album image"
              />
              <strong className="font-semibold">Daily mix 5</strong>
              <span className="text-sm text-zinc-400">Eletronica</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
