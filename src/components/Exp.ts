import { createElement } from "../Act";

export default function Skillset(label: string, children: HTMLElement[], className: string = ''): HTMLElement {
    return createElement(
        'div',
        {
            class: `grid grid-cols-[min-content_3rem_auto] gap-3 mb-2 ${className}`,
        },
        createElement('div', {"class": "min-w-[3rem] text-xl font-bold text-left font-mono"}, label),
        createElement('div', {"class": "min-w-[3rem] max-w-[3rem] after:border-b-2 after:border-gray-400 after:border-dotted after:block after:h-1 after:w-full after:translate-y-[300%]"}, ''),
        createElement('div', {"class": ""}, children),
    );
}