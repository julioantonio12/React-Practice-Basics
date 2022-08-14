import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p></p>
      </div>
      <footer>
        <Button>Cerrar</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
