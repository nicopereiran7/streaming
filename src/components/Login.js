import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../config/firebase";
import JungleCruise from "../assets/img/jungle-cruise.jpg";
import Device from "../assets/img/device.png";
import GridBasic from "./GridBasic";

const original = [
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/Mandalorian_S2.png",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/ES-419_ladyTramp@1.5X.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/ES-419_cloneWars@1.5X.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/WandaVision_EN.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/Soul_EN.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/ES-419_forkyQuestion@1.5X.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/ES-419_HSMTM@1.5X.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/RogueTrip_ES.jpg",
  },
  {
    img: "https://www.latercera.com/resizer/0EJshULjEedxo5aYJM2LBnASsf8=/900x600/filters:focal(440x148:450x138)/cloudfront-us-east-1.images.arcpublishing.com/copesa/PNHJC7LIQBGHXEQ4SBQKTH3ETY.jpg",
  },
];

const movies = [
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/AvengersEndgame@2x-2.png",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/Mulan_ES-419.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/Star_Wars_TROS_ES.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/Onward_es-419.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/Toy_Story_4_Grid_Item-1.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/Free_Solo_UKI_v2.png",
  },
  {
    img: "https://assets.megamediaradios.fm/sites/3/2021/07/black3-974x547.jpeg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/XMenWolverine_ES.jpg",
  },
  {
    img: "https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_Frozen2_AUNZ.jpg",
  },
];

const Login = () => {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserAuth(user);
      }
    });
  }, []);

  if (userAuth) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <Helmet>
        <title>
          Disney+ | Lo mejor de Disney, Pixar, Marvel, Star Wars y National
          Geographic
        </title>
      </Helmet>
      <Container>
        <Content>
          <CTA>
            <LogoImg src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg" />
            <h1>Las Mejores historias, en un mismo lugar</h1>
            <GroupBtn>
              <ButtonItem>
                <h3>CLP 6.500</h3>
                <Button>
                  <Link to="#">SUSCRIBETE AHORA</Link>
                </Button>
              </ButtonItem>
              <ButtonItem>
                <h3>CLP 6.500</h3>
                <Button>
                  <Link to="#">SUSCRIBETE AHORA</Link>
                </Button>
              </ButtonItem>
            </GroupBtn>
            <Description>
              * El precio podr??a variar en caso que el pago se realice en otras
              monedas, plataformas o medios de pago. Podr??an aplicar cargos de
              terceros.
            </Description>
          </CTA>
          <BgImage />
        </Content>
        <ImgContent>
          <img
            src="https://cannonball-cdn.bamgrid.com/assets/originals/disney-franchise-logos.png"
            alt=""
          />
        </ImgContent>
        <ContainerSecondary>
          <div className="left">
            <img src={JungleCruise} alt="" />
          </div>
          <div className="right">
            <h1>
              Disfruta Jungle Cruise por CLP 12.900 con una suscripci??n a
              Disney+.
            </h1>
            <p>
              Con Premier Access, puedes ver Jungle Cruise antes de su
              lanzamiento al resto de los suscriptores de Disney+ el 30 de
              julio. ??Las veces que quieras por CLP 12.900!
            </p>
            <Button>
              <Link to="#">SUSCRIBETE AHORA</Link>
            </Button>
          </div>
        </ContainerSecondary>
        <ContainerSecondary>
          <div className="left">
            <h1>Cuando quieras, donde quieras</h1>
            <p>
              Disfr??talo en tu pantalla favorita, ya sea tu TV, tableta,
              computadora, tel??fono y otros. Vive una experiencia ??nica con una
              amplia selecci??n de t??tulos en 4K. Adem??s, puedes ver en cuatro
              pantallas en simult??neo para que nadie se quede afuera.
            </p>
          </div>
          <div className="right">
            <img src={Device} alt="" />
          </div>
        </ContainerSecondary>
        <GridBasic
          data={original}
          title="Originales Disney+ exclusivos"
          description="Disfruta de pel??culas, series y documentales nunca antes vistos. Solo en Disney+."
        />
        <GridBasic
          data={movies}
          title="Entretenimiento sin fin"
          description="Descubre las mejores historias de Disney, Pixar, Marvel, Star Wars y National Geographic, todo en un mismo lugar. Desde nuevos lanzamientos y Originales Disney+ hasta cl??sicos inolvidables. Un lugar con entretenimiento para todos."
        />
      </Container>
    </>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 80px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(4, 20, 51, 1) 30%,
      rgba(20, 77, 64, 0) 100%,
      rgba(65, 170, 151, 1) 100%
    ),
    url("/img/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 36px;
  }

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const LogoImg = styled.img`
  width: 10%;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 30%;
  }
`;

const GroupBtn = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 8px;

  @media (max-width: 900px) {
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonItem = styled.div`
  margin-right: 20px;

  h3 {
    text-align: left;
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 4px;

    @media (max-width: 900px) {
      text-align: center;
    }
  }

  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Button = styled.div`
  padding: 20px 60px;
  background-color: #0063e5;
  border-radius: 4px;
  max-width: 340px;
  min-width: auto;
  letter-spacing: 3px;
  transition: all 0.2s ease 0s;

  a {
    color: #fff;
  }

  &:hover {
    background-color: #1673ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  text-align: left;
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
`;

const ImgContent = styled.div`
  img {
    width: 50%;
    object-fit: cover;
    padding: 80px 0;
  }
`;

const ContainerSecondary = styled.div`
  display: flex;
  align-items: center;
  padding: 0 80px;
  padding-bottom: 80px;

  h1,
  p {
    text-align: left;
  }

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
    line-height: 2rem;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .left {
    flex: 0.5;
  }

  .right {
    flex: 0.5;
    margin-left: 40px;
    align-items: flex-start;
  }

  @media (max-width: 900px) {
    display: inline;
    h1,
    p {
      text-align: center;
    }

    .left {
      flex: 1;
    }

    .right {
      flex: 1;
      margin-left: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Login;
