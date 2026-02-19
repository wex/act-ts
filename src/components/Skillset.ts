import { createElement } from "../Act";

export default function Skillset(key: string, value: string, className: string = ''): HTMLElement {
    return createElement(
        'dl',
        {
            class: `flex flex-row gap-3 mb-2 ${className} max-sm:flex-col max-sm:gap-0`,
        },
        createElement('dt', {"class": "font-bold whitespace-nowrap"}, key),
        createElement('div', {"class": "max-sm:hidden min-w-[18em] flex-auto after:border-b-2 after:border-gray-400 after:border-dotted after:block after:h-1 after:w-full after:translate-y-[250%]"}, ''),
        createElement('dd', {"class": ""}, value),
    );
}