import { House, Search, Library, ChevronLeft, ChevronRight, PlayIcon, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize } from 'lucide-react'
import { Play } from 'next/font/google';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>


          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <House />
              Home
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <Library />
              Your library
            </a>
          </nav>

          <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot hits Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hope</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Haita</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">JayPop</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">KayPop</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="p-1 bg-black/40 rounded-full">
              <ChevronLeft />
            </button>
            <button className="p-1 bg-black/40 rounded-full">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/Haita.jpg" width={104} height={104} alt="Capa da musica Orgulhoso como um leão" />
              <strong>Haita</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/Hope.jpg" width={104} height={104} alt="Capa de Sugar, do soad" />
              <strong>Hope</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/JayPop.jpg" width={104} height={104} alt="Capa de only wonder, de Frederic" />
              <strong>JayPop</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/KayPop.jpg" width={104} height={104} alt="Capa de Pop/stars, do KDA" />
              <strong>KayPop</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/KayPop.jpg" width={104} height={104} alt="Capa de Pop/stars, do KDA" />
              <strong>Kpops do dia</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a href="" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/KayPop.jpg" width={104} height={104} alt="Capa de Pop/stars, do KDA" />
              <strong>Mix mágico</strong>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Leonardo Muniz</h2>
          <div className="grid grid-cols-9 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/KayPop.jpg" className="w-full" width={120} height={120} alt="Capa do pop/stars, do kda" />
              <strong>Daily mix</strong>
              <span className="text-xs text-zinc-500">Se fosse Mamamoo, seria Solar, Whein, Hwasa e Moonbyoul</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/KayPop.jpg" className="w-full" width={120} height={120} alt="Capa do pop/stars, do kda" />
              <strong>Daily mix</strong>
              <span className="text-xs text-zinc-500">Se fosse Mamamoo, seria Solar, Whein, Hwasa e Moonbyoul</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/KayPop.jpg" className="w-full" width={120} height={120} alt="Capa do pop/stars, do kda" />
              <strong>Daily mix</strong>
              <span className="text-xs text-zinc-500">Se fosse Mamamoo, seria Solar, Whein, Hwasa e Moonbyoul</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/KayPop.jpg" className="w-full" width={120} height={120} alt="Capa do pop/stars, do kda" />
              <strong>Daily mix</strong>
              <span className="text-xs text-zinc-500">Se fosse Mamamoo, seria Solar, Whein, Hwasa e Moonbyoul</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/KayPop.jpg" className="w-full" width={120} height={120} alt="Capa do pop/stars, do kda" />
              <strong>Daily mix</strong>
              <span className="text-xs text-zinc-500">Se fosse Mamamoo, seria Solar, Whein, Hwasa e Moonbyoul</span>
            </a>

          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Image src="/KayPop.jpg" className="w-full" width={56} height={56} alt="Capa do pop/stars, do kda" />
          <div className="flex flex-col gap-1">
            <strong className="font-normal">Pop/stars</strong>
            <span className="text-xs text-zinc-400">K/DA</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-row gap-4 justify-center items-center">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-8 h-8 flex items-center justify-center ppl-1 rounded-full bg-white text-black">
              <PlayIcon />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-500">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center">
            <Volume size={20}/>
            <div className="bg-zinc-600 w-20 h-1 rounded-full">
              <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize size={20}/>
        </div>
      </footer>
    </div>
  );
}
