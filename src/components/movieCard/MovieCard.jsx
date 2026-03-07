import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <div>
    <Card style={{ width: '18rem', height: '48rem' }}
    className="carte">
      <Card.Img variant="top"
      src={movie.posterUrl} style={{ height: '450px', objectFit: 'cover' }}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text className="cardj">{movie.description}</Card.Text>
        <Button variant="primary" className="btn">Voir la Bande d'annonce</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default MovieCard;

