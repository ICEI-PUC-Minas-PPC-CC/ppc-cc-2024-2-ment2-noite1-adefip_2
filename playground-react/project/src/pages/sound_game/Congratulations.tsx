import HomeButton from "../../components/HomeButton"
import { useScore } from "../../settings/score/ScoreContext";

const Congratulations = () => {
    const { score } = useScore();

    return(
        <section className="flex justify-center items-center bg-primary-bege text-amber-800 font-comico text-4xl fixed z-50 w-full h-[100vh]">
            <div className="flex flex-col gap-5 justify-center items-center text-center">
                <h1>Parabéns, Você completou todas as fases,</h1>
                <h1>Sua pontuação foi de {score.acertos} pontos!</h1>
                <HomeButton title="Voltar ao menu principal" link="/"/>
            </div>
        </section>
    )
}

export default Congratulations