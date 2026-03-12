import { Onest } from "next/font/google";

const headingFont = Onest({
    subsets: ['latin'],
    weight: ['900'],
})

const bodyFont = Onest({
    subsets: ['latin'],
    weight: ['700'],
})


export default function Header() {
    return (
        <header className="w-full">
            <div className="flex pt-5 ml-5">
                <h2 className={`${headingFont.className} float-left text-center text-[#2d69eb] text-3xl select-none`}>CCorithm</h2>
            </div>
            <div className="mt-5 border-2 border-black"></div>
        </header>
    ) 
}