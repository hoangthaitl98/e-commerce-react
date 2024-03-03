import Carousel from "react-material-ui-carousel";
import "./Slider.scss";

function Slider() {
  const items = [
    "https://bizweb.dktcdn.net/100/446/202/themes/848642/assets/slider_3.jpg?1648632451195",
    "https://bizweb.dktcdn.net/100/446/202/themes/848642/assets/slider_1.jpg?1648632451195",
    "https://bizweb.dktcdn.net/100/446/202/themes/848642/assets/slider_2.jpg?1648632451195",
  ];

  return (
    <Carousel>
      {items.map((item) => (
        <div className={"banner"}>
          <img key={item} src={item} alt="" />
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
