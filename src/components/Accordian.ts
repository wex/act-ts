import { createElement, useState } from "../Act";

export default function Accordian({title, content, active = false}: {title: string, content: string, active?: boolean}) {

    const [isOpen, setIsOpen] = useState<boolean>(active);

    return createElement(
        'div',
        {
            "class": "bg-gray-200 m-2 border-gray-300 border-1 rounded-md"
        },
        createElement(
            'div',
            {
                "class": "flex justify-start items-center cursor-pointer p-2 px-4 text-lg font-bold",
                "onClick": () => { setIsOpen(!isOpen); }
            },
            createElement('span', {class: `${isOpen ? 'rotate-180' : 'rotate-0'} mr-2`}, '⯆'),
            createElement('div', {}, title)

        ),
        isOpen && createElement(
            'div',
            {
                "class": "p-4 bg-gray-100 border-t-1 border-gray-300"
            },
            content
        )
    );
}