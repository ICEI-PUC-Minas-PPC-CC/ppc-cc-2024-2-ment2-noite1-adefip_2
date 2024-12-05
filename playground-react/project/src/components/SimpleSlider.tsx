import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomeButton from "./HomeButton";
import ColorfulText from "./ColorfulText";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      <div className="h-[100vh] w-full bg-primary-bege_claro !flex !flex-col gap-5 justify-center items-center text-center">
        <div
          className="rounded-[40px] w-[850px] h-[500px] bg-cover bg-center shadow-lg"
          style={{
            backgroundImage: "url('../src/assets/img/som_animais.jpg')",
          }}
        ></div>
        <div className="flex flex-row gap-5">
          <ColorfulText texto="Som" size="medio-grande"/>
          <ColorfulText texto="dos" size="medio-grande"/>
          <ColorfulText texto="Animais" size="medio-grande"/>
        </div>
        <div className="flex flex-row justify-center items-center text-center gap-5">
          <HomeButton title="Jogar" link="/loading-sound-game/"/>
          <HomeButton title="Informações"/>
        </div>
      </div>
      <div>
        <h3>Aqui vai ficar o jogo numero 2</h3>
      </div>
    </Slider>
  );
}
