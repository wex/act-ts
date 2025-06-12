import { createRoot } from './Act';
import App from './App';

const container = document.querySelector<HTMLDivElement>('#app')!;
const root = createRoot(container);

root.render(App);
