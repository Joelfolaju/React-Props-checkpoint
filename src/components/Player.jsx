// src/Player.js
import { Card } from "react-bootstrap";
import '../App.css';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div>
     
       <Card style={{ width: "20rem", padding: "20px", margin: "20px", border: "2px solid gray" }} >
      <Card.Img style={{ width: "20rem", height: "20rem" }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <ul style={{ listStyle: "none" }}>
             <li> Team: {team} </li>
            <li>Nationality: {nationality}</li>
             <li> Jersey Number: {jerseyNumber}</li>
              <li>Age: {age}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
    

    </div>
  );
};

Player.defaultProps = {
  name: "Player Name",
  team: "Team Name",
  nationality: "Nationality",
  jerseyNumber: 0,
  age: 0,
  image: "https://example.com/default.jpg",
};

export default Player;