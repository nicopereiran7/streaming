import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { Redirect } from "react-router-dom";
import Recommends from "../components/Recommends";
import New from "../components/New";
import NewMovies from "../components/NewMovies";
import NewSeries from "../components/NewSeries";

const Home = () => {
  const userName = useSelector(selectUserName);

  if (!userName) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <ImgSlider />
      <Recommends />
      <New />
      <NewMovies />
      <NewSeries />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(21, 29, 29, 1) 0%,
      rgba(21, 29, 29, 1) 100%
    );
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
