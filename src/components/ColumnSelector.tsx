import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
`;

const Input = styled.input`
  width: 50px;
  height: 30px;
  text-align: center;
  margin: 0 1rem;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  text-align: center;
  border: none;
  background-color: #00cbff;
  color: black;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 20px;
`;

interface ColumnSelectorProps {
  column: number;
  setColumn: (value: number) => void;
  maxColumn: number;
}

const ColumnSelector: React.FC<ColumnSelectorProps> = ({
  column,
  setColumn,
  maxColumn,
}) => {
  const increment = () => {
    if (column < maxColumn) {
      setColumn(column + 1);
    }
  };

  const decrement = () => {
    if (column > 1) {
      setColumn(column - 1);
    }
  };

  return (
    <InputWrapper>
      <Button onClick={decrement}>-</Button>
      <Input type="text" value={column} readOnly />
      <Button onClick={increment}>+</Button>
    </InputWrapper>
  );
};

export default ColumnSelector;
