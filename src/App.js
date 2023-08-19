
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber(null)
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === null){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setFirstNumber(null);
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === null){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setFirstNumber(null);
      setOperation('')
    }

  }

  const handleMultiplyNumbers = () => {

    if(firstNumber === null){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('x')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setFirstNumber(null);
      setOperation('')
    }

  }

  const handleDivideNumbers = () => {

    if(firstNumber === null){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setFirstNumber(null);
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== null && operation !== '' && currentNumber !== null){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case 'x':
            handleMultiplyNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          default: 
            break;
        }
    }
  }

  const getSpanText = () => {
    let label = ''
    if (firstNumber) {
      label = firstNumber

      if (operation) {
        label += ' ' + operation;
      }
    }

    return label;
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} spanText={getSpanText()}/>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="c" onClick={handleOnClear} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="x" onClick={handleMultiplyNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
