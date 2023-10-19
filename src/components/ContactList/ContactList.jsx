import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/sliceContact';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };
  const visibleContacts = filterContact();
  const dispatch = useDispatch();
  
  return (
    <List>
      {visibleContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            {name + ' : ' + number}
            <Button type="button" onClick={() => dispatch(remove(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
