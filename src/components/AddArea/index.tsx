import { useState, KeyboardEvent } from 'react';
import * as S from './style';

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText);
      setInputText('')
    }
  }

  return(
    <S.Main> 
      <div className='image'>➕</div>
      <input
        className='boxestilizado'
        type='text'
        placeholder='Adicione uma tarefa'
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </S.Main>
  );
}