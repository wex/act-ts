import { createElement } from "../Act";

export default function Link(href: string, content: HTMLElement[], className: string = 'text-white hover:text-gray-300', target: string = '') {
    return createElement(
        'a',
        {
            "href": href,
            "target": target,
            "class": `${className}`
        },
        ...content
    );
}