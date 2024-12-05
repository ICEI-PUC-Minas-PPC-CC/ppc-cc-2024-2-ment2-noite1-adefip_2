import SimpleSlider from "../components/SimpleSlider"
import ColorfulText from "../components/ColorfulText"
import GoHomeButton from "../components/GoHomeBtn"



const ChooseGame = () => {
    
    return(
        <section className="relative h-[100vh] w-full overflow-hidden">
            <GoHomeButton />
            <div className="absolute z-50 flex flex-row gap-5 left-1/2 -translate-x-1/2 top-10">
                <ColorfulText texto="Selecione" size="grande"/>
                <ColorfulText texto="um" size="grande"/>
                <ColorfulText texto="Jogo" size="grande"/>
            </div>
            <SimpleSlider/>
        </section>
    )
}

export default ChooseGame