import { createElement, useState } from "./Act";
import Accordian from "./components/Accordian";
import Header from "./components/Header";

export default function App() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    return createElement('main', {},
        Header(),
        Accordian({
            title: 'This is title',
            content: 'This is content'
        }),
        createElement(
            'div',
            {
                class: 'container',
            },
            isOpen && createElement('div', {},
                createElement('button', { "class": "bg-blue-500 text-white p-2 rounded-md", "onClick": () => { setCount(count + 1); } }, 'Increase'),
                createElement('button', { "class": "bg-blue-500 text-white p-2 rounded-md", "onClick": () => { setCount(count - 1); } }, 'Decrease'),
                createElement('p', {}, `Count: ${count}`)
            ),
            createElement(
                'button',
                {
                    "class": "bg-blue-500 text-white p-2 rounded-md",
                    "onClick": function (_e: PointerEvent) {
                        setIsOpen(!isOpen);
                    }
                },
                isOpen ? 'Hide' : `Show (${count})`
            )
        )
    );

}
