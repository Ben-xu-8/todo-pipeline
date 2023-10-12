import { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import {
  addToDo,
  getAtllToDo,
  updateToDo,
  deleteToDo,
} from './utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [toDoId, setToDoId] = useState('');

  useEffect(() => {
    getAtllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>To Do List</h1>
        <div className='top'>
          <input
            type='text'
            placeholder='Add Task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className='createTask'
            onClick={
              isUpdate
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdate)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdate ? 'Update' : 'Add'}
          </div>
        </div>
        <div className='list'>
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
