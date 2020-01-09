import React, { useState, Suspense } from 'react';
import ReactDOM from 'react-dom';

const PDP = React.lazy(() => import('../components/pages/detail/Detail.jsx'));
const PLP = React.lazy(() => import('../components/pages/listing/Listing.jsx'));

import initiateComponents from './initiateComponents';

import '../stylesheets/main.scss';

initiateComponents();

const App = () => {
  const [showPLP, setShowPLP] = useState(false);
  const [showPDP, setShowPDP] = useState(false);

  const loadPDP = () => {
    setShowPDP(true);
    setShowPLP(false);
  };
  const loadPLP = () => {
    setShowPDP(false);
    setShowPLP(true);
  };

  return (
    <div>
      <button onClick={loadPDP}>Load PDP</button>
      <button onClick={loadPLP}>Load PLP</button>
      {showPLP && (
        <Suspense fallback={<div>Loading...</div>}>
          <PDP />
        </Suspense>
      )}
      {showPDP && (
        <Suspense fallback={<div>Loading...</div>}>
          <PLP />
        </Suspense>
      )}
    </div>
  );
};

if (document.querySelector('#root')) {
  ReactDOM.render(<App />, document.querySelector('#root'));
}
