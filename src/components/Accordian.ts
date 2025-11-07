import { createElement, useEffect, useState } from "../Act";
import Spacer from "./Spacer";

export default function Accordian(title: string, children: HTMLElement[], active: boolean = true) {

    const [isOpen, setIsOpen] = useState<boolean>(active);

    useEffect(() => {
        const closeEvent = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', closeEvent);

            return () => {
                window.removeEventListener('keydown', closeEvent);
            }
        }
    }, [isOpen]);

    return createElement(
        'div',
        {
            "class": ""
        },
        createElement(
            'div',
            {
                "class": "flex justify-start items-center cursor-pointer text-2xl px-10 py-5 hover:bg-blue-50 max-sm:px-5",
                "onClick": () => { setIsOpen(!isOpen); }
            },
            createElement('span', { class: `max-sm:order-last ${isOpen ? 'rotate-180' : 'rotate-0'} mr-2` }, '⯆'),
            createElement('div', {}, title),
            Spacer(),
            createElement('small', { "class": "text-xs bg-gray-50 p-1 font-mono max-lg:hidden" }, isOpen ? 'ESC' : '')
        ),
        isOpen && createElement(
            'div',
            {
                "class": "p-4 border-t-1 border-gray-300"
            },
            ...children
        )
    );
}