import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Score = {
  acertos: number;
  erros: number;
};

type ScoreContextProps = {
  score: Score;
  addPoint: () => void;
  addMiss: () => void;
  resetScore: () => void;
};

const LOCAL_STORAGE_KEY = 'gameScore';

// Criação do contexto
const ScoreContext = createContext<ScoreContextProps | undefined>(undefined);

export const ScoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useState<Score>(() => {
    const savedScore = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedScore ? JSON.parse(savedScore) : { acertos: 0, erros: 0 };
  });

  // Atualiza o localStorage sempre que o placar mudar
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(score));
  }, [score]);

  const addPoint = () => {
    setScore((prev) => ({ ...prev, acertos: prev.acertos + 5 }));
  };

  const addMiss = () => {
    setScore((prev) => ({ ...prev, erros: prev.erros + 5 }));
  };

  const resetScore = () => {
    console.log("esta chegando aqui")
    setScore({ acertos: 0, erros: 0 });
  };

  return (
    <ScoreContext.Provider value={{ score, addPoint, addMiss, resetScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

// Hook para consumir o contexto
export const useScore = (): ScoreContextProps => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore deve ser usado dentro de um ScoreProvider');
  }
  return context;
};
