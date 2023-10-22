import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from "lucide-react"

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <nav className="space-y-5 mt-10">
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <HomeIcon />
                    Home
                </a>
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Search />
                    Search
                </a>
                <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Library />
                    Your Library
                </a>
            </nav>
            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100" >Trap</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100" >Rockzera</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100" >Playlist</a>
                <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100" >Aleatórios</a>
            </nav>
        </aside>
    )
}