// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion"; // Importando framer-motion
import Home from "./pages/Home";
import ChooseGame from "./pages/ChooseGame";
import Credits from "./pages/Credits";
import LoadingScreen from "./pages/sound_game/LoadingScreen";
import SoundGame from "./pages/sound_game/SoundGame";
import Congratulations from "./pages/sound_game/Congratulations";
import { ScoreProvider } from "./settings/score/ScoreContext";

const App: React.FC = () => {
  return (
    <ScoreProvider>
      <Router>
        <div className="app-container">
        <Routes>
          <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}>
            <Home /></motion.div>} />
          <Route path="/choose-game" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}>
            <ChooseGame /></motion.div>} />
          <Route path="/credits" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}>
            <Credits /></motion.div>} />
          <Route path="/loading-sound-game" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}>
            <LoadingScreen /></motion.div>} />
          <Route path="/sound-game" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}>
            <SoundGame /></motion.div>} />
          <Route path="/sound-game/congratulations" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}>
            <Congratulations /></motion.div>} />
        </Routes>

        </div>
      </Router>
    </ScoreProvider>
  );
};

export default App;
