import { createElement } from "../Act";
import Icon from "./Icon";
import Link from "./Link";
import Spacer from "./Spacer";

export default function Navigation(items: { [key: string]: string }, className: string = '') {
    return createElement(
        'nav',
        {
            "class": `flex justify-start items-center gap-8 text-black text-xl sticky top-0 z-10 bg-white px-10 -mx-10 ${className}`,
        },
        [
            ...Object.entries(items).map(([key, value]) => {
                return Link(key, [createElement('span', {}, value)], 'text-black hover:text-gray-300');
            }),
            Spacer(),
            Link('#top', Icon('arrow-up', 'w-[48px] h-[48px]'), 'w-12 h-12 text-black bg-white hover:text-white hover:bg-gray-600 flex items-center justify-center')
        ]
    );
}