import { createElement } from "../Act";
import Icon from "./Icon";
import Link from "./Link";
import Spacer from "./Spacer";

export default function Header() {
    return createElement(
        'header',
        {
            "class": "w-full bg-gray-900 p-5 pb-[8em]",
        },
        createElement(
            'nav',
            {
                "class": "max-w-7xl mx-auto flex flex-wrap justify-start items-center gap-8 text-white text-xl border-b border-gray-800 pb-4 max-sm:flex-col",
            },
            [
                createElement('img', { class: 'w-36 rounded-full border-5 border-gray-100 shadow-lg', src: 'profile.png' }),
                createElement('h1', { "class": "flex flex-col flex-nowrap uppercase text-4xl font-[Passion_One]" }, [
                    createElement('div', { "class": "text-5xl" }, 'Hujanen,'),
                    createElement('div', { "class": "" }, 
                        createElement('span', { "class": "border-b-2 border-gray-500" }, 'Niko'),
                        createElement('span', { "class": "" }, ' '),
                        createElement('span', { "class": "" }, 'Petteri'),
                    ),
                ]),
                Spacer(),
                Link('mailto:niko.hujanen@gmail.com', Icon('envelope', 'w-[24px] h-[24px] fill-current', 'niko.hujanen@gmail.com'), 'w-full lg:w-auto', '_blank'),
                Link('tel:+358407757610', Icon('phone', 'w-[24px] h-[24px] fill-current', '+358 40 775 7610'), 'w-full lg:w-auto', '_blank'),
                Link('https://github.com/wex', Icon('github', 'w-[24px] h-[24px] fill-current', 'wex'), 'w-full lg:w-auto', '_blank'),
                Link('https://wex.fi/', Icon('www', 'w-[24px] h-[24px] fill-current', 'wex.fi'), 'w-full lg:w-auto', '_blank'),
            ]
        )
    );
}