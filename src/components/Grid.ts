import { createElement } from "../Act";

export default function Grid(children: HTMLElement[] = [], size: number = 4, className: string = '') {
    return createElement(
        'div',
        {
            class: `grid grid-cols-${size} gap-4 ${className}`,
        },
        ...children
    );
}