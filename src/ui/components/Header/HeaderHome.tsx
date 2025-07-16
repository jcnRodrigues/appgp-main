import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-h1 font-extrabold select-none drop-shadow-sm">
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl 
        shadow bg-[#e6f7f1] text-[#2b6f71] font-bold text-lg tracking-tight">
                    <Link href="/" >
                        AppGP - Gestão de Patrimonio
                    </Link>
                </span>
            </h1>
            <div className="bg-white p-3 rounded-full shadow-md">
                <button className="flex items-center justify-center">
                    <Menu className="h-6 w-6 text-[#000000]" />
                </button>
            </div>
        </div>
    )
}