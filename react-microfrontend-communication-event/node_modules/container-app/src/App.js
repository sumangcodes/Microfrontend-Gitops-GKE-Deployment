import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@sumangcodes/design-system';
import styled from 'styled-components';

const ProductCatalog = lazy(() => import('ProductCatalog/ProductList'));  // Importing Product Catalog
const Cart = lazy(() => import('ShoppingCart/Cart'));  // Importing Cart

const AppWrapper = styled.div`
  border: ${(props) => props.theme.microfrontendBorder};
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.body};
  background: linear-gradient(135deg, #232F3E 0%, #0d0d0d 100%);
`;

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 0 0 5px ${(props) => props.theme.colors.primary}, 0 0 10px ${(props) => props.theme.colors.primary};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <Heading>Microfrontend Container App</Heading>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Suspense fallback={<div>Loading Product Catalog...</div>}>
          <ProductCatalog />
        </Suspense>
        <Suspense fallback={<div>Loading Shopping Cart...</div>}>
          <Cart />
        </Suspense>
      </div>
    </AppWrapper>
  </ThemeProvider>
);

export default App;