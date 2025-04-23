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

export default class Act {
    private root: HTMLElement;
    private component: Function = () => {};
    private stateIndex: number = 0;
    private states: Record<number, any> = {};

    constructor(root: HTMLElement) {
        this.root = root;
    }

    public static createRoot(container: HTMLElement) {
        return new Act(container);
    }

    public static createElement(
        tag: string,
        props: Record<string, any>,
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

    public useState<T>(initialValue: T) {
        const index = this.stateIndex++;

        if (this.states[index] === undefined) {
            this.states[index] = initialValue;
        }

        return [
            this.states[index],
            (value: T) => {
                this.states[index] = value;
                this.render.call(this, this.component);
            }
        ];
    }

    public render(component: Function) {
        this.stateIndex = 0;

        this.component = component;
        const element = this.component.call(this);

        this.root.children.length ?
            this.root.children[0].replaceWith(element) :
            this.root.appendChild(element);
    }
}