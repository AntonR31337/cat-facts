import { useDispatch } from "react-redux";
import { deleteData, toLike } from "../store/reducer";
import { Button, CardBox, CardText, ButtonContainer } from "./styledComponentsStyles";
import SvgIcons from "./SvgIcons";

function Card({ data }) {

  const dispatch = useDispatch();

  let bgColor = '';

  if (data.like) {
    bgColor = 'gold';
  } else {
    bgColor = "white";
  }

  return (
    <CardBox>
      <ButtonContainer>
      <Button position='left: 5px' onClick={() => dispatch(toLike(data))}><SvgIcons color={bgColor} id="like" /></Button>
      <Button position='right: 5px' onClick={() => dispatch(deleteData(data))}><SvgIcons id="close" /></Button>
      </ButtonContainer>
      <CardText>{data.text}</CardText>
    </CardBox>
  );
}

export default Card;
