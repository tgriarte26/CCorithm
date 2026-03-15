import { Onest } from "next/font/google";

const headingFont = Onest({
    subsets: ['latin'],
    weight: ['900'],
})

const bodyFont = Onest({
    subsets: ['latin'],
    weight: ['700'],
})

export default function LandingPage() {
    return (
        <div className="flex items-center justify-center bg-blue-300">
            <h1 className={`${bodyFont.className} text-black text-7xl text-center max-w-4xl`}>The Best CC Transfer Guide on the Web</h1>
        </div>
    )
}