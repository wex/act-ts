import { createElement, useState } from "../Act";

export default function Header() {
    const [fun, setFun] = useState<boolean>(false);

    return createElement('header', {
        "class": "w-full h-16 bg-gray-500 p-4",
    },
        createElement('h1', { "class": fun ? "text-red-500" : "text-green-500" }, 'Header'),
        createElement('button', { "onClick": () => { setFun(!fun); } }, 'Click me')
    );
}