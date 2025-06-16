import { createElement } from "../Act";

export default function Section(id: string, className: string = '', children: HTMLElement[] = []) {
    return createElement(
        'section',
        {
            "id": id,
            "class": `${className} max-w-7xl mx-auto bg-white p-10 rounded-lg shadow-md`
        },
        ...children
    );
}