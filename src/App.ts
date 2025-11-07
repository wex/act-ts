import { createElement } from "./Act";
import Accordian from "./components/Accordian";
import Bills from "./components/Bills";
import Column from "./components/Column";
import Container from "./components/Container";
import Exp from "./components/Exp";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Hr from "./components/Hr";
import Navigation from "./components/Navigation";
import Paragraph from "./components/Paragraph";
import Section from "./components/Section";
import Skillset from "./components/Skillset";

export default function App() {

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
                Grid([
                    Column([

                        Container('me', 'px-10 py-5', [

                            Heading('Minusta', 2, 'text-2xl uppercase'),
                            Bills([
                                'turkulainen',
                                'vm. 1985',
                                'ohjelmointi',
                                'elektroniikka',
                                'musiikki',
                                'hyvät oluet',
                                'musta huumori',
                                'videopelit',
                            ], 'text-sm'),

                            Heading('Kielitaito', 2, 'text-2xl uppercase'),
                            Container('languages', '', [
                                Skillset('Suomi', 'Äidinkieli'),
                                Skillset('Englanti', 'Hyvä'),
                            ]),
                            

                            Heading('Teknologiat', 2, 'text-2xl uppercase'),
                            Container('tech', '', [
                                Skillset('PHP', 'Natiivi'),
                                Skillset('JS/TS', 'Erinomainen'),
                                Skillset('SQL', 'Erinomainen'),
                                Skillset('CSS/SASS', 'Erinomainen'),
                                Skillset('C#', 'Hyvä'),
                                Skillset('Java', 'Hyvä'),
                                Skillset('Go', 'Perusteet'),
                                Skillset('Rust', 'Perusteet'),
                            ]),

                            Heading('Alustat', 2, 'text-2xl uppercase'),
                            Bills([
                                'Zend',
                                'Laravel',
                                'React',
                                'Livewire',
                                'Tailwind',
                                'Svelte',
                                'CakePHP',
                                'WordPress',
                            ], 'text-sm'),

                            Heading('Avainsanat', 2, 'text-2xl uppercase'),
                            Bills([
                                'REST', 'SOAP', 'GraphQL', 'WS', 'JMS',
                                'Git', 'JIRA', 'httpd', 'nginx', 'mysqld',
                                'postgres', 'redis', 'composer', 'npm',
                                'Linux', 'CI/CD', 'Docker', 'podman',
                                'traefik', 'Ansible', 'borgmatic',
                                'dbt',
                            ]),
                            
                        ]),
                        
                    ], 1, '-m-10 mr-0 bg-stone-200 mix-blend-multiply rounded-tl-lg rounded-bl-lg max-lg:col-span-3 max-lg:m-0'),
                    Column([

                        Navigation({
                            '#jobs': 'Työkokemus',
                            '#studies': 'Opinnot',
                            '#picks': 'Lukuja ja onnistumisia',
                        }, 'border-b-1 border-gray-200'),                        
                        
                        Container('jobs', '', [

                            Accordian('Työkokemus', [
                                Exp('2019', [
                                    Heading('Louhos Digital (Louhos Group Oy)', 3, 'my-0! text-xl'),
                                    Paragraph('2022 alkaen: Tuotekehitys (PHP), asiakas- ja konsultointiprojektit, backend team lead'),
                                    Paragraph('2019 - 2022: Tuotekehitys (PHP), asiakas- ja konsultointiprojektit, uudet teknologiat'),
                                    Paragraph('2019 Whitestone Oy ja Viestintäliiga Oy yhdistyvät'),
                                ]),
                                Exp('2010', [
                                    Heading('Whitestone Oy', 3, 'my-0! text-xl'),
                                    Paragraph('2016 - 2019: Tuotekehitys (PHP), konsultointi, team lead'),
                                    Paragraph('2012 - 2016: Tuotekehitys (PHP), full stack'),
                                    Paragraph('2010 - 2012: Ohjelmistokehitys (PHP), verkkokaupat ja verkkosivut, full stack'),
                                ]),
                                Exp('2007', [
                                    Heading('Freelancer', 3, 'my-0! text-xl'),
                                    Paragraph('Kaksi tyhjästä rakennettua verkkokauppaa, useampia verkkosivuprojekteja'),
                                ]),
                                Hr(),
                                Exp("2025\n2012", [
                                    Heading('Apollo Nightclub, Yökerho, Bar Bryssel', 3, 'my-0! text-xl'),
                                    Paragraph('Useita ravintoloita ja työnkuvia, mm. plokkari, baarimestari, vuorovastaava, VIP-host'),
                                ]),
                                Exp("2008", [
                                    Heading('Teleste Oyj', 3, 'my-0! text-xl'),
                                    Paragraph('Laajakaistavahvistimien kokoonpano, viritys ja testaus'),
                                ]),
                                Exp("2006\n2005\n2001", [
                                    Heading('Nokia Mobile Phones / Nokia Oyj', 3, 'my-0! text-xl'),
                                    Paragraph('Erilaisia kesätöitä, mm. varaosamyynti, kokoonpano, testaus'),
                                ]),
                            ]),
                        ]),

                        Container('studies', '', [
                            Accordian('Opinnot', [
                                Heading('Opinnot', 2, 'text-2xl'),
                                Exp('2010', [
                                    Heading('Turun ammattikorkeakoulu', 3, 'my-0! text-xl'),
                                    Paragraph('Elektroniikkasuunnittelu, insinööri (AMK), 111 op (2007 - 2010)'),
                                ]),
                                Exp('2006', [
                                    Heading('Turun ammatti-instituutti', 3, 'my-0! text-xl'),
                                    Paragraph('Sähköalan perustutkinto, elektroniikka-asentaja (2004 - 2006)'),
                                ]),
                            ]),
                        ]),
                        
                        Container('picks', '', [
                            Accordian('Lukuja ja onnistumisia', [
                                Heading('Lukuja ja onnistumisia', 2, 'text-2xl'),
                                Skillset('wManage', 'Vuodesta 2012 aktiivikäytössä ollut alusta, tukeutuu Zend Frameworkiin'),
                                Skillset('Telia, St1, Seppälän', 'Useita sisäisiä työkaluja ja integraatioita'),
                                Skillset('50+ verkkokauppaa', 'Useita kotimaisia B2B-verkkokauppoja ja niihin liittyvät integraatiot'),
                                Skillset('10+ CRM/PIM/ERP', 'Räätälöityjä CRM-, PIM- ja ERP-ratkaisuja, integraatiot'),
                                Skillset('100+ integraatiota', 'Lukemattomia eri teknologioita ja järjestelmiä'),
                                Skillset('50+ verkkosivua', 'Useita kotimaisia verkkosivuja'),
                            ]),
                        ]),

                    ], 2, 'max-lg:col-span-3'),
                ], 3, 'gap-10'),
            ]
        ),
        Footer()
    );

}
