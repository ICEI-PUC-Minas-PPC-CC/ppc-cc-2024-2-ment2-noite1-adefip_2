import { motion } from "framer-motion"
import ColorfulText from "./ColorfulText"

const CenterMsg = () => {
    return(        
        <motion.div className="flex flex-col gap-5 justify-center items-center bg-primary-bege min-h-52 min-w-96 p-10 rounded-lg shadow-lg" 
            animate={{
                scale: [1, 1.05, 1], // Escala para criar o efeito de pulsar
            }}
            transition={{
                duration: 2, // Duração do ciclo completo
                repeat: Infinity, // Repetição infinita
                ease: "easeInOut", // Tipo de easing para suavizar
            }}>
            <div className="flex flex-row gap-2.5">
                <ColorfulText texto="Carregando" size="medio"/>
                <ColorfulText texto="O" size="medio"/>
                <ColorfulText texto="Jogo" size="medio"/>
            </div>
            <h1 className="text-amber-900">Descubra qual o animal através do seu som!</h1>
            <div className="flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-amber-900 border-dashed rounded-full animate-spin"></div>
            </div>
        </motion.div>

    )
}

export default CenterMsg