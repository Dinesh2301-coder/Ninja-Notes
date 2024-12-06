import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Note.css"
import { useNavigate } from 'react-router-dom';

function Note({title, desc, deleteNote, id}) {
  let navigate = useNavigate()

  return (
    <Card style={{width:"70vw", margin:"auto"}}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary" style={{margin:"0 5px"}} onClick={() => navigate(`/edit/${id}`)}>
          <img src="src/assets/edit.png" alt="" style={{width:"16px"}}/></Button>
        <Button variant="danger" onClick={()=>{deleteNote(id)}}>
          <img src="src/assets/bin.png" alt="" style={{width:"16px", padding:0}}/></Button>
      </Card.Body>
    </Card>
  );
}

export default Note;