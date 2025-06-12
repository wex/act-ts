import { createElement } from "../Act";

export default function Heading(text: string) {
    return createElement('h1', { "class": "text-white text-2xl font-bold my-4" }, text);
}