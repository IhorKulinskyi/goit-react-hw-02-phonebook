import PropTypes from 'prop-types';
import { Wrapper, FilterInput } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Wrapper>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={onChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
