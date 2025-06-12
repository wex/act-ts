import { createElement, useState } from "../Act";

export default function Header() {
    const [fun, setFun] = useState<boolean>(false);

    return createElement('header', {
        "style": fun ? "background: red;" : "background: green;"
    },
        createElement('h1', {}, 'Header'),
        createElement('button', { "onClick": () => { setFun(!fun); } }, 'Click me')
    );
}