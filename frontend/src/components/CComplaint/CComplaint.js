import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiHeartAddFill } from "react-icons/ri";
import { BsBookmarkStarFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";




function CComplaint(props) {
  return (
    <Card style={{ width: '24rem', margin:'1rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.info}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.timeloc}</ListGroup.Item>
        <ListGroup.Item>{props.author}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
    
      <button class="bg-pink-500 text-white active:bg-pink-600 h-12 p-1 m-1 font-bold uppercase text-xs rounded hover:shadow-md outline-none focus:outline-none border-1 border-black ease-linear transition-all duration-150" type="button">
      <RiHeartAddFill class="size-6" /> 111
      </button>
      <button class="bg-pink-500 text-white active:bg-pink-600 h-12 p-1 m-1 font-bold uppercase text-xs rounded hover:shadow-md outline-none focus:outline-none border-1 border-black ease-linear transition-all duration-150" type="button">
      <BsBookmarkStarFill class="size-6" /> 22
      </button>
      <button class="bg-pink-500 text-white active:bg-pink-600 h-12 p-1 m-1 font-bold uppercase text-xs rounded hover:shadow-md outline-none focus:outline-none border-1 border-black ease-linear transition-all duration-150" type="button">
      <IoEyeSharp class="size-6" /> 824
      </button>
      </Card.Body>
    </Card>
  );
}

export default CComplaint;