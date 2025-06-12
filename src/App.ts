import { createElement, useState } from "./Act";
import Header from "./components/Header";

export default function App() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    return createElement('main', {},
        Header(),
        createElement(
            'div',
            {
                class: 'container',
            },
            isOpen && createElement('div', {},
                createElement('button', { onClick: () => { setCount(count + 1); } }, 'Increase'),
                createElement('button', { onClick: () => { setCount(count - 1); } }, 'Decrease'),
                createElement('p', {}, `Count: ${count}`)
            ),
            createElement(
                'button',
                {
                    onClick: function (_e: PointerEvent) {
                        setIsOpen(!isOpen);
                    }
                },
                isOpen ? 'Hide' : `Show (${count})`
            )
        )
    );

}
