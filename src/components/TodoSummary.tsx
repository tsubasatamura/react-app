type Props = {
	// 関数
	deleteAllCompleted: () => void;
  };
  
  // 子コンポーネント(完了ToDo全削除ボタン)
  export const TodoSummaryComp = ({ deleteAllCompleted }: Props) => {
	return (
	  <div className="flex justify-end">
		<button onClick={deleteAllCompleted} className="text-sm text-red-500">
		  完了したTodoを削除
		</button>
	  </div>
	);
  };