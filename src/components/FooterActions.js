import React from 'react';

import { TodoContext } from '../Context';

function FooterActions({ styles }) {
  const { setFilter, isDark, filter } = React.useContext(TodoContext);

  const darkClass = isDark ? 'dark' : '';

  function handleFilter(filter) {
    setFilter(filter);
  }

  return (
    <div className={`actions ${darkClass}`} style={styles}>
      <span
        onClick={() => { handleFilter(''); }}
        className={!filter ? 'active' : ''}
      >All</span>
      <span
        onClick={() => { handleFilter('active'); }}
        className={filter === 'active' ? 'active' : ''}
      >Active</span>
      <span
        onClick={() => { handleFilter('completed'); }}
        className={filter === 'completed' ? 'active' : ''}
      >Completed</span>
    </div>
  );
}

export default FooterActions;