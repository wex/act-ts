import { createElement } from "../Act";

export default function Button({text, onClick, color = 'bg-blue-500'}: {text: string, onClick: () => void, color?: string}) {
    return createElement(
        'button',
        {
            "class": `${color} text-white p-2 rounded-md`,
            "onClick": onClick
        },
        text
    )
}