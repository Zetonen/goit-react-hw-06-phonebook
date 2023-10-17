import { List, Item, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/sliceContact';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => {
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