export function html(strings: TemplateStringsArray, ...values: any[]): Element {
    const element = document.createElement('template');

    let innerHtml = '';
    for (const [index, string] of strings.entries()) {
        innerHtml += string;
        if (index < values.length) {
            switch (typeof values[index]) {
                case 'string':
                    innerHtml += values[index];
                    break;
                case 'function':
                    innerHtml += values[index].call();
                    break;
                default:
                    innerHtml += values[index].toString();
            }
        }
    }

    element.innerHTML = innerHtml;

    return element.content.firstElementChild!;
}

export function useState<T>(initialValue: T): [T, (value: T) => void] {
    if (Act.instance === undefined) {
        throw new Error('Act not initialized');
    }

    return Act.instance.useState(initialValue);
}

export function createRoot(container: HTMLElement) {
    return Act.createRoot(container);
}

export function createElement(tag: string, props: Record<string, any> = {}, ...children: any[]): HTMLElement {
    return Act.createElement(tag, props, ...children);
}

export default class Act {
    private root: HTMLElement;
    private component: Function = () => {};

    public static instance: Act;
    public static stateIndex: number = 0;
    public static states: Record<number, any> = {};

    constructor(root: HTMLElement) {
        this.root = root;
    }

    public static createRoot(container: HTMLElement) {
        Act.instance = new Act(container);

        return Act.instance;
    }

    public static createElement(
        tag: string,
        props: Record<string, any> = {},
        ...children: any[]
    ) {
        const element = document.createElement(tag);
        const matcher = new RegExp('^on([A-Z].*)$');

        for (const [key, value] of Object.entries(props)) {
            const match = matcher.exec(key);
            if (match) {
                element.addEventListener(match[1].toLowerCase(), value);
            } else {
                element.setAttribute(key, value);
            }
        }

        for (const child of children) {
            if (child === false || child === null || child === undefined) {
                continue;
            }

            console.log(typeof child, child);

            switch (typeof child) {
                case 'string':
                    element.innerText = child;
                    break;
                default:
                    element.appendChild(child);
            }
        }

        return element;
    }

    public useState<T>(initialValue: T): [T, (value: T) => void] {
        const index = Act.stateIndex++;

        if (Act.states[index] === undefined) {
            Act.states[index] = initialValue;
        }

        return [
            Act.states[index],
            (value: T) => {
                Act.states[index] = value;
                this.render.call(this, this.component);
            }
        ];
    }

    public render(component: Function) {
        Act.stateIndex = 0;

        this.component = component;
        const element = this.component.call(this);

        this.root.children.length ?
            this.root.children[0].replaceWith(element) :
            this.root.appendChild(element);
    }
}