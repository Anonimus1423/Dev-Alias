import React from 'react';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { Router } from './components/Router';

const StyledApp = styled.div`
  
`;

function App() {
  return (
    <StyledApp>
      <Toaster
          position="top-left"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: 'toast-body',
            duration: 3500,
            style: {
              background: '#363636',
              color: '#fff',
            },
            // Default options for specific types
            success: {
              duration: 3500,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
/>
      <Router />
    </StyledApp>
  );
}

export default App;
