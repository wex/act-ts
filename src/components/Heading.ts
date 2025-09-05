import { createElement } from "../Act";

export default function Heading(text: string, level: 1|2|3|4|5|6 = 1, className: string = ''): HTMLElement {
    return createElement(`h${level}`, { "class": `font-bold my-4 ${className}` }, text);
}