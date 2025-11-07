import { createElement } from "../Act";

export default function List(children: HTMLElement[], className: string = '', ordered: boolean = false): HTMLElement {
    return createElement(
        ordered ? 'ol' : 'ul',
        {
            class: `${className}`,
        },
        ...children
    );
}