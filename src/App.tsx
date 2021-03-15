
import React from 'react';
import { HashRouter  as Router } from 'react-router-dom';
import Routes from './routes/index';
import AppProvider from './hooks';

//import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  </>
);
export default App;