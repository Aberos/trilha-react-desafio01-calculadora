
import { InputContainer } from './styles';
import Span from '../Span';

const Input = ({value, spanText}) => {
    return (
      <InputContainer>
        <Span text={spanText} />
        <input disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;