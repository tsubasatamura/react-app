import { useState } from 'react';
import { Plus } from 'lucide-react';

type Props = {
	// 関数(親コンポーネントに処理内容を記載、子コンポーネントでは定義のみ)
	addTodo: (title: string) => void;
};

// 子コンポーネント(Todoリスト追加テキストボックス)
export const AddTodoFormComp = ({ addTodo }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // ページの更新を防ぐ
    e.preventDefault();

    // 親に値を渡す
    addTodo(inputValue);

    // 値を空に戻す
    setInputValue('');
  };

  return (
    <form className="flex" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="新しいTodoを入力してください"
        className="grow rounded-s bg-slate-200 p-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-e bg-blue-600 p-2 transition-colors hover:bg-blue-800 disabled:bg-gray-400"
        disabled={!inputValue}
      >
		{/* ボタンアイコン */}
        <Plus className="text-white" />
      </button>
    </form>
  );
};