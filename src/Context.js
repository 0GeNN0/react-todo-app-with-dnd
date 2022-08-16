import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = React.createContext();

function Context(props) {
  const [isDark, setIsDark] = React.useState(true);
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filter, setFilter] = React.useState('');
  const isTabletOrBigger = useMediaQuery({ query: '(min-width: 540px)' });

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  React.useEffect(() => {
    document.querySelector('body').style.backgroundColor = isDark ? '#161722' : '#e4e5f1';
  }, [isDark]);

  function toggleTheme() {
    setIsDark(prev => !prev);
  }

  function addNewTodo(text) {
    setTodoList(prev => [...prev, { id: uuidv4(), text, isChecked: false }]);
  }

  function handleChecking(id) {
    setTodoList(prev => {
      return prev.map(item => {
        return item.id === id ? { ...item, isChecked: !item.isChecked } : item;
      });
    });
  }

  function deleteTodo(id) {
    setTodoList(prev => prev.filter(item => item.id !== id));
  }

  const renderFilteredTodos = () => {
    if (filter === '') {
      return todoList;
    } else if (filter === 'active') {
      return todoList.filter(item => !item.isChecked);
    } else if (filter === 'completed') {
      return todoList.filter(item => item.isChecked);
    }
  };

  function clearCompleted() {
    setTodoList(prev => prev.filter(item => !item.isChecked));
  }

  function handleOnDragEnd(result) {
    const { source, destination } = result;

    if (!destination) return;

    const cloneTodos = [...todoList];
    const [draggedItem] = cloneTodos.splice(source.index, 1);
    cloneTodos.splice(destination.index, 0, draggedItem);

    setTodoList(cloneTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        isDark,
        toggleTheme,
        addNewTodo,
        renderFilteredTodos,
        handleChecking,
        deleteTodo,
        setFilter,
        clearCompleted,
        todoList,
        isTabletOrBigger,
        filter,
        handleOnDragEnd
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default Context;