import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PhotosData from './fakeData'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={PhotosData} />, document.getElementById('root'));
registerServiceWorker();
