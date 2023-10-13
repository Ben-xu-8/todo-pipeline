import axios from 'axios';

const baseUrl = 'http://localhost:5000/api';

const getAtllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log('data -->', data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText('');
      getAtllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdate) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText('');
      setIsUpdate(false);
      getAtllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAtllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAtllToDo, addToDo, updateToDo, deleteToDo };
