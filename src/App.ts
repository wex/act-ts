import Act, { html } from "./Act";

export default function App(this: Act) {
    const [count, setCount] = this.useState<number>(0);

    return Act.createElement(
        'div',
        {
            class: 'container',
        },
        html`<h1>Hello, world!</h1>`,
        Act.createElement(
            'button',
            {
                onClick: function (_e: PointerEvent) {
                    setCount(count + 1);
                }
            },
            `You clicked me ${count} times`
        )
    );
}
