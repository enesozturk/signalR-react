import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import './style/main.scss'

const rootElement = document.getElementById('root');

render(<App />, document.getElementById('root'));