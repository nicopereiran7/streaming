import styled from "styled-components";
import { Link } from "react-router-dom";

const DataBsaic = (props) => {
  const { data, title } = props;

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        {data.map((item, index) => (
          <Wrap key={index}>
            <Link to="/">
              <img src={item.img} alt="" />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 74%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
    opacity: 1;
    transition: 0.5s ease all;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export default DataBsaic;
