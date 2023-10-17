import { useState } from 'react';

import {
  Form,
  Label,
  Input,
  Button,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { add, getSliceContacts } from 'redux/sliceContact';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getSliceContacts);
  const dispatch = useDispatch();

  const handelChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    const findContact = contacts.some(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (findContact) {
      alert(`${name} already exists`);
    } else {
      dispatch(add({ name, number }));
    }
    reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label >
        Name
        <Input
          type="text"
          name="name"
          onChange={handelChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          onChange={handelChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
