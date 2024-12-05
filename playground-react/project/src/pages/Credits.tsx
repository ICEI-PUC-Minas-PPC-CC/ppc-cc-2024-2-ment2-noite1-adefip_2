import GoHomeButton from "../components/GoHomeBtn"

const Credits = () => {
    return(
        <section className="w-full h-[100vh] flex justify-center bg-primary-bege">
            <GoHomeButton />
            <div className="text-amber-900 text-3xl flex flex-col gap-5 justify-center items-center p-30 font-comico">
                <h1 className="hover:cursor-pointer transition ease-in-out hover:-translate-y-[.2rem] hover:scale-102">Lucas Schimidt</h1>
                <h1 className="hover:cursor-pointer transition ease-in-out hover:-translate-y-[.2rem] hover:scale-102">Carlos Leonel</h1>
                <h1 className="hover:cursor-pointer transition ease-in-out hover:-translate-y-[.2rem] hover:scale-102">Otavio Araujo</h1>
                <h1 className="hover:cursor-pointer transition ease-in-out hover:-translate-y-[.2rem] hover:scale-102">Rafael Milani</h1>
                <h1 className="hover:cursor-pointer transition ease-in-out hover:-translate-y-[.2rem] hover:scale-102">Caetano Florêncio</h1>
            </div>
        </section>
    )
}

export default Credits