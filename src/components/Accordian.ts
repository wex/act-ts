import { createElement, useState } from "../Act";

export default function Accordian({title, content, active = false}: {title: string, content: string, active?: boolean}) {

    const [isOpen, setIsOpen] = useState<boolean>(active);

    return createElement(
        'div',
        {
            "class": "w-full bg-gray-500 p-4",
            "onClick": () => { setIsOpen(!isOpen); }
        },
        createElement(
            'div',
            {
                "class": "flex justify-between items-center"
            },
            createElement('div', {}, title),
            isOpen ? 'Sulje' : 'Avaa'

        ),
        isOpen && createElement('div', {}, content)
    );
}