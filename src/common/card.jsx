import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ItemCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Dynamic {props.id} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          {"This is sentence."}
          {" How to do "}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Link</Card.Link>
        <Card.Link href="#">GitHub</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
