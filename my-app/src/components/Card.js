import { useDispatch } from "react-redux";
import styled from "styled-components";
import like from "../img/like.svg";
import { deleteData, toLike } from "../store/reducer";

const CardBox = styled.div`
text-align: center;
color: palevioletred;
width: 275px;
border: 1px solid;
height: 190px;
overflow: scroll;
background: gray;
`;
const Image = styled.img`
width: 100%;
height: 100px;
`;

function Card({ data }) {
  
  const dispatch = useDispatch();

  return (
    <CardBox>
      <Image src={data.img} />
      {data.text}
      <div>
        <button onClick={() => dispatch(toLike(data))}>Like!</button>
        <button onClick={() => dispatch(deleteData(data))}>Delete</button>
      </div>
    </CardBox>
  );
}

export default Card;
