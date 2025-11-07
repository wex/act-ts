import { createElement } from "../Act";

export default function Paragraph(content: string, className: string = ''): HTMLElement {
    return createElement(
        'p',
        {
            class: `${className}`,
        },
        content
    );
}