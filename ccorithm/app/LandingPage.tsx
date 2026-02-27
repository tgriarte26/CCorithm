import { Josefin_Sans } from "next/font/google";

const headingFont = Josefin_Sans({
    subsets: ['latin'],
    weight: ['700'],
})

const bodyFont = Josefin_Sans({
    subsets: ['latin'],
    weight: ['700'],
})

export default function LandingPage() {
    return (
        <div className="flex w-full items-center justify-center">
            <h1 className={`${bodyFont.className} text-black text-6xl text-center`}>The React Framework for the Web</h1>
        </div>
    )
}