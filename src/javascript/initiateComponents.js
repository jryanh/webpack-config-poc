import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

//import Header from '../components/organisms/header/Header.jsx'
const Header = React.lazy(() =>
  import('../components/organisms/header/Header.jsx')
);

const getAtomic = str => {
  switch (str) {
    case 'o':
      return 'organisms';
    case 'm':
      return 'molecules';
    case 'a':
      return 'atoms';
  }
};

export default () => {
  const components = document.querySelectorAll('[data-js-module]');

  if (components) {
    components.forEach(element => {
      const target = element.getAttribute('data-js-module').split('-');

      const Component = React.lazy(() =>
        import(
          `../components/${getAtomic(target[0])}/${target[1]}/${target[1].replace(/^\w/, c => c.toUpperCase())}.jsx`
        )
      );

      ReactDOM.render(
        <Suspense fallback={<div>Loading...</div>}>
          <Component data={element.getAttribute('data-js-config')} />
        </Suspense>,
        element
      );
    });
  }
};
