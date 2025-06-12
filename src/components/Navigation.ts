import { createElement } from "../Act";
import Icon from "./Icon";
import Link from "./Link";
import Spacer from "./Spacer";

export default function Navigation() {
    return createElement(
        'nav',
        {
            "class": "flex justify-start items-center gap-8 text-black text-xl",
        },
        [
            Link('#summary', [createElement('span', {}, 'Summary')], 'text-black hover:text-gray-300'),
            Link('#experience', [createElement('span', {}, 'Experience')], 'text-black hover:text-gray-300'),
            Spacer(),
            Link('#top', Icon('arrow-up', 'w-[48px] h-[48px]'), 'w-12 h-12 text-black bg-white hover:text-white hover:bg-gray-600 flex items-center justify-center')
        ]
    );
}