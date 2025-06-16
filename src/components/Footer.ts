import { createElement } from "../Act";

export default function Footer() {
    return createElement(
        'footer',
        {
            class: 'max-w-7xl mx-auto p-5 text-gray-400 text-center text-sm',
        },
        createElement('span', {}, 'Built with Act-ts and Tailwind CSS - '),
        createElement('a', { href: "https://github.com/wex/act-ts" }, 'see github.com/wex/act-ts')
    );
}