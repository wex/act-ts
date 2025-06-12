import { createElement } from "../Act";

export default function Container(id: string, className: string = '', children: HTMLElement[] = []) {
    return createElement(
        'article',
        {
            "id": id,
            "class": `${className}`
        },
        ...children
    );
}