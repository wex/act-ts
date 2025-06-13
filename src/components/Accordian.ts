import { createElement, useState } from "../Act";
import Spacer from "./Spacer";

export default function Accordian({ title, content = '', years = '', active = false, children = [] }: { title: string, content?: string, years?: string, active?: boolean, children?: HTMLElement[] }) {

    const [isOpen, setIsOpen] = useState<boolean>(active);

    return createElement(
        'div',
        {
            "class": "border-gray-300 border-b-1 hover:bg-green-100 first-of-type:border-t-1"
        },
        createElement(
            'div',
            {
                "class": "flex justify-start items-center cursor-pointer text-lg px-10 py-5",
                "onClick": () => { setIsOpen(!isOpen); }
            },
            createElement('span', { class: `${isOpen ? 'rotate-180' : 'rotate-0'} mr-2` }, '⯆'),
            createElement('div', {}, title),
            Spacer(),
            createElement('small', {}, years)

        ),
        isOpen && createElement(
            'div',
            {
                "class": "p-10 bg-gray-100 border-t-1 border-gray-300"
            },
            content,
            ...children
        )
    );
}