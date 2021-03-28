import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId='a5a59389-13cb-42b2-b10a-3e54a5d3e9b8' language='en-US'>
    <Provider>
      <App />
    </Provider>
    ,
  </SpeechProvider>,
  document.getElementById('root'),
);
