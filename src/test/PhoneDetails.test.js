import React from 'react';
import ContentWrapper from './ContentWrapper';
import '@testing-library/jest-dom/extend-expect';

it('mocks match.params in the test in case your component references match.params.someValueHere', () => {
  const { getByText } = renderWithRouterMatch(ContentWrapper, {
    route: '/project/ABC123',
    path: '/project/:id'
  });
  expect(getByText('Match id: ABC123')).toBeInTheDocument();
});
