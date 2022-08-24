import { useState } from 'react';
import * as S from './App.styles';
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id:1, name: 'Estudar javascript', done: false},
    { id:2, name: 'comprar pão', done: false}
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done:false
    });
    setList(newList)
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  
  return(
    <S.Main>
    <S.Container>
      <S.Header>Lista de Tarefas 🎯</S.Header>
      {/*Area para adicionar tarefa*/}
      <AddArea onEnter={handleAddTask}/>
      {/*Area lista*/}
      {list.map((item, index)=>(
        <ListItem 
        key={index}
        item={item}
        onChange={handleTaskChange}
        />
      ))}

    </S.Container>
  </S.Main>
  );
}

export default App

