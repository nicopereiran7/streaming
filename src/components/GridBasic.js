import styled from "styled-components";

const GridBasic = ({ data, title, description }) => {
  return (
    <GridContainer>
      <div className="title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Grid>
        {data.map((item, index) => (
          <Wrap key={index}>
            <img src={item.img} alt="" />
          </Wrap>
        ))}
      </Grid>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  padding: 0 80px;
  padding-bottom: 40px;

  .title {
    h1 {
      font-size: 30px;
    }

    p {
      padding: 0 0 24px;
      font-size: 16px;
      line-height: 1.5rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
    opacity: 1;
    transition: 0.5s ease all;
  }
`;

export default GridBasic;
