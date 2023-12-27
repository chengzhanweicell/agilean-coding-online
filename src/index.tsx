import React from 'react';
import ReactDOM from 'react-dom/client';
import Tree from '../src/list/List'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div>
      <Tree></Tree>
    </div>
  </React.StrictMode>
);

