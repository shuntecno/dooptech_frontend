import { Button } from "react-bootstrap";
function Buttons(props) {
  const style = {
    innerLine: "none",
    color:"white",
    textTransform: "none",
    borderRadius: "30px",
    background: "#009999",
    fontFamily: 'Poppins',
    width:"100px"

  };
  const { text } = props;

  return (
    <>
      <Button variant="none" style={style}>{text}</Button>
    </>
  );
}

export default Buttons;
