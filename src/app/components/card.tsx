import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators, State } from "../states";
import Viewer from './viewer'


type CardProps = {
  side: String;
  title: String;
  text: any;
  setText: any;
};

const CardGrid = (props: any) => {
  const dispatch = useDispatch();
  const { updateText, cleanText } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  const text = useSelector((state: State) => state.text);
  return (
    <div className="card-container">
      <Card text={text} setText={updateText} title={"MarkDown"} side="right" />
      <Card text={text} setText={null} title={"Html"} side="left" />
    </div>
  );
};

const WriteAre = (props: any) => {
  const refrestValue = (target: any) => {
    props.setText(target.value);
    target.style.height = "auto";
    target.style.height = target.scrollHeight + "px";
  };
  return (
    <div>
      <textarea
        name="writeAre"
        value={props.text}
        onChange={(e) => refrestValue(e.target)}
      />
    </div>
  );
};



const Card = (props: CardProps) => {
  return (
    <div className={"card " + (props.side === "right" ? "border-l" : "")}>
      <p className="title">{props.title}</p>
      <div className="card-content">
        {props.side === "right" ? (
          <WriteAre text={props.text} setText={props.setText} />
        ) : (
          <Viewer text={props.text}/>
        )}
      </div>
    </div>
  );
};

export { Card, CardGrid };
