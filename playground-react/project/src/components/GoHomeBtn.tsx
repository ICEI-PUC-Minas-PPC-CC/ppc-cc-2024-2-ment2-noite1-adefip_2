import { ImHome3 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const GoHomeButton = (props: any) => {
    const navigate = useNavigate(); // Hook para navegação
    const { style } = props;

    // Função para navegar para a rota desejada
    const handleNavigate = (path: string) => {
      navigate(path);
    };

    return (
        <div 
          onClick={() => handleNavigate("/")}
          className={`absolute z-50 flex top-0 left-0 p-5 text-4xl text-amber-900 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer ${style}`}
        >
            <ImHome3 />
        </div>
    );
}

export default GoHomeButton;
