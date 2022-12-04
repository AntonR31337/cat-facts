import styled from "styled-components";

export const CardBox = styled.div`
text-align: center;
color: palevioletred;
max-width: 320px;
border: none;
height: 400px;
overflow: hidden;
background: #004343;
position: relative;
border-radius: 10px;
box-shadow: 0 1px 4px 3px rgb(0 0 0 / 15%);
`;
export const CardText = styled.div`
text-align: center;
color: palevioletred;
position: absolute;
top: 0;
margin-top: 40px;
color: #fff;
font-size: 22px;
line-height: 26px;
padding: 0 18px 6px;
font-weight: 600;
`;
export const Image = styled.img`
width: 100%;
height: 100%;
`;
export const SortButton = styled.button`
padding: 12px 20px;
background: #fff;
color: #333;
border-radius: 10px;
border: 1px solid #dedede;
font-size: 15px;
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
position: absolute;
top: 0px;
border: none;
background: none;
color: red;
${props => props.position};
`;
export const Svg = styled.svg`
&:hover {
    fill: gold;
    transition: 0.3s;
}
`;