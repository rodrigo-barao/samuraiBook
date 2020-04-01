import React, { useState } from 'react';

import Scanner from './Scanner';
import Results from './Results';

function Main() {
  const [isbn, setIsbn] = useState();
  return (
    <div>
      <Scanner onScan={ setIsbn } />
      { isbn && <Results isbn={ isbn } />}
    </div>
  );
}

export default Main;
