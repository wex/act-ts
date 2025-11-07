import { createElement } from "../Act";
import { useState } from "../Act";

export default function Bills(items: string[], className: string = '', itemClassName: string = ''): HTMLElement {

    const [selected, setSelected] = useState<string[]>([]);

    return createElement(
        'ul',
        {
            class: `flex flex-wrap gap-1 ${className}`,
        },
        ...items.map(t => {
            return createElement('li', {
                "class": `inline-block px-2 py-1 rounded-lg cursor-pointer bg-blue-900 text-white ${itemClassName} ${selected.includes(t) ? 'bg-blue-600!' : ''}`,
                "onClick": () => {
                    setSelected([...selected, t]);
                }
            }, t);
        })
    );
}