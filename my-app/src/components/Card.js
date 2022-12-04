import { useDispatch } from "react-redux";
import { deleteData, toLike } from "../store/reducer";
import { Button, CardBox, CardText, Image } from "./styledComponentsStyles";
import SvgIcons from "./SvgIcons";

function Card({ data }) {

  const dispatch = useDispatch();

  let bgColor = '';

  if (data.like) {
    bgColor = 'gold';
  } else {
    bgColor = "currentColor";
  }

  return (
    <CardBox>
      <Image src={data.img} />
      <CardText>{data.text}</CardText>
      <div>
        <Button position='left: 5px' onClick={() => dispatch(toLike(data))}><SvgIcons color={bgColor} id="like" /></Button>
        <Button position='right: 5px' onClick={() => dispatch(deleteData(data))}><SvgIcons id="close" /></Button>
      </div>
    </CardBox>
  );
}

export default Card;
