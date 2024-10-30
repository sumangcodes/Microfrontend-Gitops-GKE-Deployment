import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@sumangcodes/design-system';
import styled from 'styled-components';

// Lazy load microfrontends via Webpack Module Federation
const ProductCatalog = lazy(() => import('ProductCatalog/ProductList'));
const Cart = lazy(() => import('ShoppingCart/Cart'));

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
  text-shadow: 0 0 5px ${(props) => props.theme.colors.primary}, 
               0 0 10px ${(props) => props.theme.colors.primary};
`;

const Notes = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)};
  padding: ${(props) => props.theme.spacing(3)};
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <Heading>Microfrontend Container App</Heading>

      {/* Dynamically load microfrontends */}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Suspense fallback={<div>Loading Product Catalog...</div>}>
          <ProductCatalog />
        </Suspense>
        <Suspense fallback={<div>Loading Shopping Cart...</div>}>
          <Cart />
        </Suspense>
      </div>

      {/* Geekified Architecture Flow and Components */}
      <Notes>
        <h2>Architecture Flow</h2>
        <p>
          This application embraces a <strong>modular microfrontend architecture</strong>, leveraging 
          the power of <em>Webpack 5 Module Federation</em> to decouple the <em>Product Catalog</em> 
          and <em>Shopping Cart</em> modules into independent, self-contained React apps. Each microfrontend 
          runs in isolation but communicates seamlessly via the <strong>Window Event API</strong> to exchange state 
          and actions. The entire infrastructure is containerized and orchestrated on <strong>Google Kubernetes Engine (GKE)</strong>, 
          with each microfrontend shipped as an autonomous containerized workload.
        </p>

        <h3>Key Components:</h3>
        <ul>
          <li>
            <strong>Container App:</strong> Acts as the bootstrapper, orchestrating dynamic imports via lazy loading.
          </li>
          <li>
            <strong>Product Catalog Microfrontend:</strong> Handles product listing with built-in modularity.
          </li>
          <li>
            <strong>Shopping Cart Microfrontend:</strong> Manages cart state, providing event-based synchronization between components.
          </li>
          <li>
            <strong>React + Webpack Module Federation:</strong> Enables runtime imports across microfrontends without re-bundling, 
            keeping everything loosely coupled but tightly aligned.
          </li>
          <li>
            <strong>Event-Driven Communication:</strong> Uses the <code>Window</code> object to broadcast cross-microfrontend events for 
            state management (think Redux without the overhead).
          </li>
          <li>
            <strong>Design System:</strong> Implements a shared theme and component library to maintain UI consistency across microfrontends.
          </li>
          <li>
            <strong>Cloud DNS + GoDaddy:</strong> The domain is routed through Google Cloud DNS, backed by GoDaddy nameservers.
          </li>
          <li>
            <strong>Kubernetes Gateway API:</strong> Provides L7 load balancing and service routing, ensuring seamless traffic flow 
            across HTTP services and backend components.
          </li>
        </ul>
      </Notes>
    </AppWrapper>
  </ThemeProvider>
);

export default App;