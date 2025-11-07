import { createElement } from "../Act";

export default function Skillset(key: string, value: string, className: string = ''): HTMLElement {
    return createElement(
        'dl',
        {
            class: `flex flex-row gap-3 mb-2 ${className}`,
        },
        createElement('dt', {"class": "font-bold whitespace-nowrap"}, key),
        createElement('div', {"class": "min-w-[3em] flex-auto after:border-b-2 after:border-gray-400 after:border-dotted after:block after:h-1 after:w-full after:translate-y-[250%]"}, ''),
        createElement('dd', {"class": ""}, value),
    );
}