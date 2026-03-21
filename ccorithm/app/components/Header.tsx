import { Onest } from "next/font/google";
import styles from "@/app/Form.module.css";

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
        <header className="w-full bg-white">
            <div className="flex pt-5 ml-5">
                <h2 className={`${headingFont.className} ${styles.headerText} tracking-wide float-left text-center text-[#2d69eb] text-4xl select-none`}>CCorithm</h2>
            </div>
            <a className="flex text-black justify-center">Resources</a>
            <div className="mt-5 border-2 border-black"></div>
        </header>
    ) 
}