import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CenterLoadingMsg from "../../components/CenterLoadingMsg";
import GoHomeButton from "../../components/GoHomeBtn";

const LoadingScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigate("/sound-game");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return(
        <section className=" font-comico flex justify-center items-center w-full h-[100vh] bg-[url('../src/assets/img/selva.jpeg')]">
            <GoHomeButton style="!text-white"/>
            <CenterLoadingMsg />
        </section>
    )
}

export default LoadingScreen