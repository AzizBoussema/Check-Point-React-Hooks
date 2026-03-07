import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddMovie({add_movie}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// ----------------Mon Code---------------------
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setposterUrl] = useState("");
  const [trailer, setTrailer] = useState("");

// console.log("newMovie:", {id:Date.now(), title, rate, description, posterUrl, trailer });

  const handleSubmit = (e) => {e.preventDefault();


    add_movie({ id:Date.now(), title, rate, description, posterUrl, trailer })

    setTitle("")
    setDescription("")
    setRate("")
    setposterUrl("")
    setTrailer("")
    handleClose()
};

  return (
    <div>
      {/* Button */}
      <Button variant="warning" onClick={handleShow}>
        AddMovie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Movie...</Modal.Title>
      </Modal.Header>

      <Form onSubmit = {handleSubmit}>
        <Modal.Body>  
            {/*---------- Title----------- */}
            <Form.Group className="mb-3">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Movie's title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            {/*---------------- Description-------- */}
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as='textarea'
                rows={5}
                placeholder="Movie description"
                value={description}
                onChange={(e) =>
                setDescription(e.target.value)}
              />
            </Form.Group>

{/* <Form.Control
  type="number"
  min={0}
  max={5}
  value={rate}
  onChange={(e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 5) {
      setRate(value);
    }
  }}
/> */}
            {/*------------- Rate------------ */}
             <Form.Group className="mb-3">
              <Form.Label>Rate:</Form.Label>
              <Form.Control
  type="text"
  placeholder="1-5"
  value={rate}
  onChange={(e) => {
    const value = e.target.value;

    if (value === "" || /^[1-5]$/.test(value)) {
      setRate(value);
    }
  }}
/>

              {/* <Form.Control
              type="text"
                // rows={5}
                placeholder="1-5"
                value={rate}
                // min={0}
                // max={5}
                // maxLength={1}
                
                onChange= {(e) => {
                  const value = e.target.value;
                  if (
                    value === "" ||
                    value.match(/^[1-5]$/.test(value))
                  ) {
                setRate(value);
                }
              }}
              /> */}

            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Rate:</Form.Label>
              <Form.Control
                type="number"
                placeholder="1-5"
                min={0}
                max={5}
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group> */}
            {/* A modifier pour ne pas dépasser 5 */}

            {/*------------ Poster URL----------- */}
            <Form.Group className="mb-3">
              <Form.Label>poster URL:</Form.Label>
              <Form.Control
                type="url"
                placeholder="url..."
                value={posterUrl}
                onChange={(e) => setposterUrl(e.target.value)}
              />
            </Form.Group>

 {/*------------ Trailer----------- */}
            <Form.Group className="mb-3">
              <Form.Label>Trailer URL:</Form.Label>
              <Form.Control
                type="url"
                placeholder="url..."
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />
            </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"
          onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
          type="submit"

          disabled={
            !title.trim() ||
            !description.trim() ||
            !rate.trim() ||
            !posterUrl.trim() ||
            !trailer.trim()
            }
        >
            Save Changes
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default AddMovie;