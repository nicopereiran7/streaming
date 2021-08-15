import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <Logo>
        <img
          src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
          alt=""
        />
      </Logo>
      <Links>
        <Link to="#">Acuerdo de suscripcion</Link>
        <Link to="#">Terminos de Uso</Link>
        <Link to="#">Politicas de Seguridad</Link>
        <Link to="#">Publicidad personalizada</Link>
        <Link to="#">Dispositivos compatibles</Link>
        <Link to="#">Ayuda</Link>
      </Links>
      <p>
        2021 Disney y su familia de compañías afiliadas. Todos los derechos
        reservados.
      </p>
      <p>
        Disney+ es un servicio por suscripción de pago, su contenido está sujeto
        a disponibilidad. El servicio Disney+ es comercializado por TFCF
        International Channels Chile Limitada, Avenida Nueva Costanera N° 4040,
        piso 4, comuna de Vitacura, Santiago de Chile y número de RUT
        76.157.220-2.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 80px;
  text-align: center;

  p {
    font-size: 12px;
    line-height: 1rem;
  }
`;

const Logo = styled.div`
  img {
    width: 10%;
    object-fit: cover;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;

  a {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

export default Footer;
