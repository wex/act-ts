import { createElement, useState } from "./Act";
import Accordian from "./components/Accordian";
import Button from "./components/Button";
import Header from "./components/Header";

export default function App() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const accordianData: {title: string, content?: string, children?: HTMLElement[]}[] = [
        {
            title: 'This is title',
            content: 'This is content'
        },
        {
            title: 'This is title',
            content: 'This is content'
        }
    ];

    return createElement('main', {},
        Header(),
        accordianData.map(item => Accordian({
            title: item.title,
            content: item.content ?? '',
            children: item.children ?? [],
        })),
        createElement(
            'div',
            {
                class: 'container',
            },
            isOpen && createElement('div', {},
                Button({ text: 'Increase', onClick: () => { setCount(count + 1); }, color: "bg-green-500" }),
                Button({ text: 'Decrease', onClick: () => { setCount(count - 1); }, color: "bg-red-500" }),
                createElement('p', {}, `Count: ${count}`)
            ),
            Button({ text: isOpen ? 'Hide' : `Show (${count})`, onClick: () => { setIsOpen(!isOpen); } }),
        )
    );

}
