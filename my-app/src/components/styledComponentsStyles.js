import styled from "styled-components";

export const CardBox = styled.div`
background-image: url("https://i.pinimg.com/736x/86/ad/eb/86adebc9027efa836a642df9a19dfa42.jpg");
background-repeat: no-repeat;
background-size: cover;
text-align: center;
display: flex;
flex-direction: column;
justify-content: start;
color: palevioletred;
max-width: 320px;
border: none;
min-height: 100%;
width: 100%;
border-radius: 10px;
box-shadow: 0 1px 4px 3px rgb(0 0 0 / 15%);
`;
export const CardText = styled.div`
text-align: center;
color: palevioletred;
color: #fff;
font-size: 22px;
line-height: 26px;
margin: auto;
padding: 0 18px 6px;
font-weight: 600;
`;
export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
`;
export const SortButton = styled.button`
padding: 12px 20px;
background: #fff;
color: #333;
border-radius: 10px;
border: 1px solid #dedede;
font-size: 15px;
width: 175px;
cursor: pointer;
transition: 0.3s;
    &:hover {
        background: red;
        color: #fff;
    }
`;
export const Button = styled.button`
padding: 5px;
margin: 5px;
top: 0px;
border: none;
background: none;
color: red;
${props => props.position};
`;
export const Svg = styled.svg`
transition: 0.3s;
&:hover {
    fill: red;
    color: #fff;
    stroke: #fff;
}
`;