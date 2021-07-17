import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h1>Movies</h1>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

export default Movies;
