import { Josefin_Sans } from "next/font/google";

const headingFont = Josefin_Sans({
    subsets: ['latin'],
    weight: ['700'],
})

const bodyFont = Josefin_Sans({
    subsets: ['latin'],
    weight: ['700'],
})

export default function SelectMajor() {

    function toggleDropdown() {
        const dropdownItems = document.getElementById('dropdownItems');
    }

    function filterFunction() {
        
    }

    return (
        <div className="flex flex-col w-full justify-center items-center">
            <h2 className={`${bodyFont.className} flex text-center text-black text-xl`}>Select Major:</h2>
            <div id="dropdownItems">
                <input
                type="text"
                placeholder="Search"
                className={`${bodyFont.className} flex border-2 border-black rounded-xl px-3 py-2 text-black`}
                />
                <div className="dropdown-item">Business</div>
                <div className="dropdown-item">Computer Sc</div>
            </div>
            
        </div>
    )
}