import Carousel from "react-material-ui-carousel";
import classes from "./Slider.module.css";

function Slider() {
  const items = [
    "https://bizweb.dktcdn.net/100/446/202/themes/848642/assets/slider_3.jpg?1648632451195",
    "https://bizweb.dktcdn.net/100/446/202/themes/848642/assets/slider_1.jpg?1648632451195",
    "https://bizweb.dktcdn.net/100/446/202/themes/848642/assets/slider_2.jpg?1648632451195",
  ];

  return (
    <Carousel>
      {items.map((item) => (
        <img key={item} className={classes.banner} src={item} alt="" />
      ))}
    </Carousel>
  );
}

export default Slider;
