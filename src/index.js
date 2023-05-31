import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import { App } from 'components/App';

const theme = {
  colors: {
    text_black: '#000000',  
    text_gray: '#696969',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
