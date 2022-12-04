import styled from "styled-components";

const TitleText = styled.h1`
text-align: center;
color: #000;
`;

function Title({ children }) {

  return (
    <TitleText>{children}</TitleText>
  );
}

export default Title;
