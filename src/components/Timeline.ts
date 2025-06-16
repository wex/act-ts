import { createElement } from "../Act";

export default function Timeline(children: HTMLElement[], className: string = '') {
    return createElement(
        'div',
        {
            class: `${className}`,
        },
        createElement(
            'ol',
            {
                class: 'relative border-s border-gray-800 dark:border-gray-300',
            },
            children
        )
    );
}