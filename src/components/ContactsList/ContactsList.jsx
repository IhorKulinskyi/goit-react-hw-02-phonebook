import PropTypes from 'prop-types';
import { List, ListItem, ListBtn } from './ContactsList.styled';

const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <ListBtn type="button" id={id} onClick={handleDelete}>
              Delete
            </ListBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default ContactsList;
