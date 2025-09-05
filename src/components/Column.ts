import { createElement } from "../Act";

export default function Column(children: HTMLElement[], span: number = 1, className: string = ''): HTMLElement {
    return createElement(
        'div',
        {
            class: `col-span-${span} ${className}`,
        },
        ...children
    );
}