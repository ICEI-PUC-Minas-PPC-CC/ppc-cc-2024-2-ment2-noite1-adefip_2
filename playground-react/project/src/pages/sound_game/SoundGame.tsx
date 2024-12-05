import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "../../components/GoHomeBtn";
import Scoreboard from "../../settings/score/ScoreBoard";
import { useScore } from "../../settings/score/ScoreContext";
import dados from "../../settings/sound_game/levels.json";

const SoundGame = () => {
  const [faseAtual, setFaseAtual] = useState(0);
  const [audioSrc, setAudioSrc] = useState("");
  const navigate = useNavigate();
  const fase = dados.fases[faseAtual];
  const { addPoint } = useScore();

  useEffect(() => {
    const currentPhase = dados.fases[faseAtual];
    setAudioSrc(currentPhase.audio);
  }, [faseAtual]);

  const verificarResposta = (correta:boolean) => {
    if (correta) {
      alert("Resposta correta!");
      setFaseAtual((prev) => prev + 1);
      addPoint();
    } else {
      alert("Resposta errada! Tente novamente.");
    }
  };

  useEffect(() => {
    if (faseAtual >= dados.fases.length) {
      const timer = setTimeout(() => {
        navigate("/sound-game/congratulations");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [faseAtual, navigate]);

  return (
    <section className="text-amber-900 font-comico flex flex-col gap-10 justify-center items-center w-full h-[100vh] bg-[url('../src/assets/img/selva.jpeg')]">
      <GoHomeButton style="!text-white"/>
      
        {fase ? (
          <>
            <div className="w-max max-w-5xl">
              <div className="min-w-96 min-h-96 flex flex-col gap-5 text-center justify-center items-center rounded-lg bg-primary-bege shadow-lg">
                <h1>Qual o som do animal?</h1>
                <audio key={audioSrc} controls>
                  <source src={audioSrc} type="audio/mpeg" />
                  Seu navegador não suporta o áudio.
                </audio>
              </div>
            </div>

            <ul className="w-max max-w-5xl flex flex-wrap justify-center gap-5">
              {fase.opcoes.map((opcao) => (
                <li
                  key={opcao.id}
                  className="min-w-96 p-10 flex text-center justify-center items-center rounded-lg bg-primary-bege shadow-lg hover:cursor-pointer transition ease-in-out hover:-translate-y-[.2rem] hover:scale-102"
                  onClick={() => verificarResposta(opcao.correta)}
                >
                  <h1>{opcao.texto}</h1>
                </li>
              ))}
            </ul>
          </>
        ) : (
          null
        )}
        <Scoreboard style="!text-white"/>
    </section>
  );
};

export default SoundGame;
