import React from 'react';
import ReactDOM from 'react-dom';
import Books from './Books';
import Container from './Container';

ReactDOM.render(
  <div>
    <Container title="Books Page">
      <Books />
    </Container>
  </div>,
  document.getElementById('root')
);