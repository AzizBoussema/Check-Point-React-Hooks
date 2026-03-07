import "./FilterByTitle.css";
import Form from 'react-bootstrap/Form';

const FilterByTitle = ({searchTitle, setSearchTitle}) => {

  return (
    <div className='container'>
        <Form.Group className="mb-3">
              <Form.Label>Search By Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                required
              />
            </Form.Group>
    </div>
  )
}

export default FilterByTitle;