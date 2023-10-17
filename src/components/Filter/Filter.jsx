import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { getSliceFilter, search } from 'redux/sliceFilter';
export const Filter = () => {
  const filter = useSelector(getSliceFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={e => dispatch(search(e.target.value))}
        />
      </Label>
    </div>
  );
};
