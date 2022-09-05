import React from 'react'
import { v4 as uuid } from "uuid";

const AddTaskCardButton = ({taskCardsList, setTaskCardsList}) => {
  const addTaskCard = () => {
    const TaskCardId = uuid();
    //タスクカードを追加する
    setTaskCardsList([...taskCardsList, {
      id: TaskCardId,
      draggableId: `item${TaskCardId}`,
    }])
  };

  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton
