import React from 'react';
import { useScore } from './ScoreContext';

const Scoreboard: React.FC = (props:any) => {
  const { style } = props
  const { score } = useScore();

  return (
    
    <div className={`${style} font-comico fixed top-0 right-0 flex flex-row justify-start items-start p-5 gap-5`}>
      <p className="text-lg">Pontos</p>
      <h1 className="text-5xl">{score.acertos}</h1>
    </div>

    
  );
};

export default Scoreboard;
