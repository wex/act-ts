import { createElement } from "../Act";

export default function ListItem(content: string, className: string = ''): HTMLElement {
    return createElement(
        'li',
        {
            class: `${className}`,
        },
        content
    );
}