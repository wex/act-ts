import { createElement } from "../Act";
import Heading from "./Heading";
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
                "class": "max-w-7xl mx-auto flex flex-wrap justify-start items-center gap-8 text-white text-xl border-b border-gray-800 pb-4",
            },
            [
                createElement('img', { class: 'w-36 rounded-full border-5 border-gray-100 shadow-lg', src: 'profile.png' }),
                Heading('Beta, Boris Ivanov'),
                Spacer(),
                Link('mailto:boris.beta@mail.com', Icon('envelope', 'w-[24px] h-[24px] fill-current', 'boris.beta@mail.com'), 'w-full lg:w-auto', '_blank'),
                Link('tel:+358000000000', Icon('phone', 'w-[24px] h-[24px] fill-current', '+358 00 000 0000'), 'w-full lg:w-auto', '_blank'),
                Link('https://github.com/', Icon('github', 'w-[24px] h-[24px] fill-current', 'github.com'), 'w-full lg:w-auto', '_blank'),
                Link('https://boris.beta/', Icon('www', 'w-[24px] h-[24px] fill-current', 'boris.beta'), 'w-full lg:w-auto', '_blank'),
            ]
        )
    );
}