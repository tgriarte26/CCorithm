import { Josefin_Sans } from "next/font/google";

const headingFont = Josefin_Sans({
    subsets: ['latin'],
    weight: ['700'],
})

const bodyFont = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400'],
})


export default function Header() {
    return (
        <header className="w-full">
            <div className="flex mt-7 ml-5">
                <h2 className={`${headingFont.className} float-left text-center text-[#2d69eb] text-2xl`}>CCorithm</h2>
            </div>
            <div className="mt-5 mb-5 border-3 border-black"></div>
        </header>
    ) 
}