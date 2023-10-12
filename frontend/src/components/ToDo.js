import React from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className='todo'>
      <div className='text'>{text}</div>
      <div className='icons'>
        <BiEdit className='icon' onClick={updateMode} />
        <BiTrash className='icon' onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
