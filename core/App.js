import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1', {}, 'This is h1 tag.');

const child = React.createElement(
  'div',
  { id: 'child' },
  [
    { ...heading, key: 'heading1', props: { ...heading.props, class: 'heading1' } },
    { ...heading, key: 'heading2', props: { ...heading.props, class: 'heading2' } },
  ],
);

const parent = React.createElement(
  'div',
  { id: 'parent' },
  [
    { ...child, key: 'child1', props: { ...child.props, id: 'child1' } },
    { ...child, key: 'child2', props: { ...child.props, id: 'child2' } },
  ],
);

const rootElement = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(parent);