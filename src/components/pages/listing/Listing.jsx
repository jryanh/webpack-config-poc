import React from 'react';

import Headline from '../../atoms/headline/Headline.jsx';
import Teaser from '../../atoms/teaser/Teaser.jsx';
import Pagination from '../../atoms/pagination/Pagination.jsx';
import Wrapper from '../../pages/wrapper/Wrapper.jsx';

const ProductListingPage = () => {
  return (
    <Wrapper>
      <main>
        <Headline>ProductListingPage</Headline>
        <Teaser></Teaser>
        <Pagination></Pagination>
      </main>
    </Wrapper>
  );
};

export default ProductListingPage;
