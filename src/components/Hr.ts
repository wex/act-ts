import { createElement } from "../Act";

export default function Hr(className: string = ''): HTMLElement {
    return createElement(
        'hr',
        {
            class: `h-[1px] w-full border-0 bg-gray-300 my-2 ${className}`,
        },
    );
}