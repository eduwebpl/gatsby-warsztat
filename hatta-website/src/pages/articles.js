import React from 'react';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const pageData = {
  title: 'articles',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const ArticlesPage = ({ data }) => {
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <p>Komponent usunięty na potrzeby warsztatów</p>
    </>
  );
};

export default ArticlesPage;
