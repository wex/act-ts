import Act from "./Act";

export default function App(this: Act) {

    const [isOpen, setIsOpen] = this.useState<boolean>(false);

    const [count, setCount] = this.useState<number>(0);

    return Act.createElement(
        'div',
        {
            class: 'container',
        },
        isOpen && Act.createElement('div', {}, 
            Act.createElement('button', {onClick: () => { setCount(count + 1); }}, 'Increase'),
            Act.createElement('button', {onClick: () => { setCount(count - 1); }}, 'Decrease'),
            Act.createElement('p', {}, `Count: ${count}`)
        ),
        Act.createElement(
            'button',
            {
                onClick: function (_e: PointerEvent) {
                    setIsOpen(!isOpen);
                }
            },
            isOpen ? 'Hide' : `Show (${count})`
        )
    );
}
