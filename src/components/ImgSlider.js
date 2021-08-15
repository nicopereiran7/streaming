import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const DATA = [
  {
    name: "",
    img: "https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/master/public/images/slider-badag.jpg",
  },
  {
    name: "",
    img: "https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/master/public/images/slider-badging.jpg",
  },
  {
    name: "",
    img: "https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/master/public/images/slider-scale.jpg",
  },
];

const ImgSlider = () => {
  var settigs = {
    dots: true,
    infinity: true,
    speed: 500,
    sliderToShow: 1,
    sliderToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settigs}>
      {DATA.map((item, index) => (
        <Wrap key={index}>
          <Link to="/home">
            <img src={item.img} alt={item.name} />
          </Link>
        </Wrap>
      ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 40px;

  & > button {
    opacity: 0;
    width: 5vw;
    height: 100%;
    z-index: 1;
    transition: opacity 0.3s ease 0s;

    &:hover {
      opacity: 1;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
      transition: 0.3s ease all;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-prev {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    overflow: hidden;
  }

  img {
    width: 100%;
    padding: 0;
    transition: 0.3s ease all;

    &:hover {
      transform: scale(1.2);
    }
  }

  &:hover {
    padding: 0;
    transition-duration: 300ms;
  }
`;

export default ImgSlider;
