import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>-StyledComponents-</Title>
      <Button>KOHEI</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px blue;
  border-radius: 20px;
  padding: 8px;
  margin: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.div`
  margin: 0px;
  color: goldenrod;
`;

const Button = styled.div`
  background-color: yellow;
  border: none;
  padding: 10px;
  &:hover {
    background-color: black;
    color: blanchedalmond;
    cursor: pointer;
  }
`;
