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
                "class": "max-w-5xl mx-auto flex justify-start items-center gap-8 text-white text-xl border-b border-gray-800 pb-4",
            },
            [
                Link('#top', Icon('cube', 'w-[48px] h-[48px] fill-current')),
                Heading('Beta, Boris Ivanov'),
                Spacer(),
                Link('mailto:boris.beta@mail.com', Icon('envelope', 'w-[48px] h-[48px] fill-current'), '', '_blank'),
                Link('tel:+358000000000', Icon('phone', 'w-[48px] h-[48px] fill-current'), '', '_blank'),
                Link('https://github.com/', Icon('github', 'w-[48px] h-[48px] fill-current'), '', '_blank'),
                Link('https://boris.beta/', Icon('www', 'w-[48px] h-[48px] fill-current'), '', '_blank'),
            ]
        )
    );
}