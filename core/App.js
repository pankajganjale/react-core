const heading = React.createElement('h1', { id: "heading" }, "This is h1 tag.");

const child = React.createElement('div', { id: "child" }, heading);

const parent = React.createElement('div', { id: "parent" }, child);

const rootElement = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(parent);