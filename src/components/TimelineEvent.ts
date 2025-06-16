import { createElement } from "../Act";

export default function TimelineEvent(title: string, label: string, content: string = '', children: HTMLElement[] = [], className: string = '') {
    return createElement(
        'li',
        {
            class: `mb-5 ms-5 ${className}`,
        },
        createElement(
            'div',
            { class: "absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -start-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-800" },
        ),
        createElement(
            'time',
            { class: "mb-1 text-sm font-normal leading-none text-black" },
            label
        ),
        createElement(
            'h3',
            { class: "text-lg font-semibold text-black" },
            title
        ),
        createElement(
            'p',
            { class: "mb-4 text-base font-normal text-gray-700" },
            content
        ),
        children
    );
}