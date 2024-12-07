// 子コンポーネント
import { TodoListComp } from './components/TodoList';
import { AddTodoFormComp } from './components/AddTodoForm';
import { TodoSummaryComp } from './components/TodoSummary';

// カスタムフック
import { useTodoList } from './hooks/useTodoList';

// 親コンポーネント
function App() {
  // カスタムフック
  const { todoList, changeCompleted, addTodo, deleteTodo, deleteAllCompleted } = useTodoList();

  return (
    <main className="mx-auto mt-10 max-w-xl space-y-10">
      <h1 className="text-center text-4xl">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoFormComp addTodo={addTodo} />
        <div className="space-y-5 rounded bg-slate-200 p-5">
          <TodoListComp 
            todoList={todoList} 
            changeCompleted={changeCompleted} 
            deleteTodo={deleteTodo}
          />
          <TodoSummaryComp deleteAllCompleted={deleteAllCompleted} />
        </div>
      </div>
    </main>
  );
}

export default App;