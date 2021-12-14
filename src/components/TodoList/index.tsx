import { FC, ReactElement, useState, useEffect, useCallback } from 'react';

import TdInput from './Input';
import TdList from './List';

import { ITodo } from './typings';

const TodoList: FC = (): ReactElement => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const addTodo = useCallback((todo: ITodo) => {
    console.log(todo);
    setTodoList((todoList) => [...todoList, todo]);
  }, []);
  return (
    <div className='todo-list'>
      <TdInput addTodo={addTodo} todoList={todoList} />
      <TdList />
    </div>
  );
};

export default TodoList;
