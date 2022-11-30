import styled from "styled-components";

function Card({ data }) {

  const Title = styled.p`
    text-align: center;
    color: palevioletred;
    width: 275px;
    border: 1px solid;
    height: 190px;
    overflow: scroll;
`;

  return (
    <Title>{data}</Title>
  );
}

export default Card;
