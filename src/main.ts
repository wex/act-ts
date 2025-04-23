import Act from './Act';
import App from './App';

const container = document.querySelector<HTMLDivElement>('#app')!;
const root = Act.createRoot(container);

root.render(App);
