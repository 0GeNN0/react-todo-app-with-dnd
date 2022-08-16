import React from 'react';

import AddTodo from './AddTodo';
import Header from './Header';
import TodoList from './TodoList';
import { TodoContext } from '../Context';
import FooterActions from './FooterActions';

function Main() {
  const { isTabletOrBigger, isDark } = React.useContext(TodoContext);

  const footerMobileStyles = {
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: isDark ? '#25273c' : '#fafafa',
  };

  return (
    <main>
      <Header />
      <AddTodo />
      <TodoList />
      {!isTabletOrBigger && <FooterActions styles={footerMobileStyles} />}
      <p className='dnd'>Drag And Drop To Reorder List</p>
    </main>
  );
}

export default React.memo(Main);