import { createElement, useState } from "./Act";
import Accordian from "./components/Accordian";
import Button from "./components/Button";
import Column from "./components/Column";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Timeline from "./components/Timeline";
import TimelineEvent from "./components/TimelineEvent";

export default function App() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const accordianData: { title: string, content?: string, children?: HTMLElement[] }[] = [
        {
            title: 'This is title',
            content: 'This is content',
        },
        {
            title: 'This is title',
            content: 'This is content',
        }
    ];

    return createElement(
        'main',
        {
            'id': 'top'
        },
        Header(),
        Section(
            '',
            'relative mt-[-8em]',
            [
                Navigation(),
                Container(
                    'summary',
                    '-mx-10',
                    [
                        ...accordianData.map(item => Accordian({
                            title: item.title,
                            content: item.content ?? '',
                            children: item.children ?? [],
                        })),
                    ]
                ),
                Grid([
                    Column([
                        Heading('Experience', 2),
                        Timeline([
                            TimelineEvent('Event 1', '2000 - 2025', 'Description 1'),
                            TimelineEvent('Event 2', '2000 - 2025', 'Description 2'),
                            TimelineEvent('Event 3', '2000 - 2025', 'Description 3'),
                            TimelineEvent('Event 4', '2000 - 2025', 'Description 4'),
                        ]),
                    ]),
                    Column([
                        Heading('Education', 2),
                        Timeline([
                            TimelineEvent('Event 1', '2000 - 2025', 'Description 1'),
                            TimelineEvent('Event 2', '2000 - 2025', 'Description 2'),
                            TimelineEvent('Event 3', '2000 - 2025', 'Description 3'),
                            TimelineEvent('Event 4', '2000 - 2025', 'Description 4'),
                        ]),
                    ]),
                ], 2),
                Container(
                    'experience',
                    '',
                    [
                        createElement(
                            'div',
                            {
                                class: 'container',
                            },
                            isOpen && createElement('div', {},
                                Button({ text: 'Increase', onClick: () => { setCount(count + 1); }, color: "bg-green-500" }),
                                Button({ text: 'Decrease', onClick: () => { setCount(count - 1); }, color: "bg-red-500" }),
                                createElement('p', {}, `Count: ${count}`)
                            ),
                            Button({ text: isOpen ? 'Hide' : `Show (${count})`, onClick: () => { setIsOpen(!isOpen); } }),
                        )
                    ]
                )
            ]
        ),
        Footer()
    );

}
