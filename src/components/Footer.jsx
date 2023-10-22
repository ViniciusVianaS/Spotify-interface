import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2} from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex flex-center justify-between">
            <div className="flex items-center gap-3">
                <img src="/eminem.jpg" width={50} height={50} alt="Album image" />
                <div className="flex flex-col">
                    <strong className="font-normal">Whithout Me</strong>
                    <span className="text-xs text-zinc-400">Eminem</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle size={20} className="text-zinc-200" />
                    <SkipBack size={20} className="text-zinc-200" />
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                        <Play />
                    </button>
                    <SkipForward size={20} className="text-zinc-200" />
                    <Repeat size={20} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">1:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
                    </div>
                    <span className="text-xs text-zinc-400">4:50</span>
                </div>
            </div>
            <div className="flex flex-items gap-2 ">
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className="flex itemns-center gap-2">
                    <Volume size={20} />
                    <div className="h-1 rounded-full w-24 bg-zinc-600 mt-2">
                        <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer>
    )
}