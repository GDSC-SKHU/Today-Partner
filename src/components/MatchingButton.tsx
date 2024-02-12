import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: #00cbff;
  border: 1px solid transparent;
  line-height: 1.5;
  color: black;
  padding: 10px;
  margin: 5px;
  width: 170px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;

interface MatchingButtonProps {
  onClick: () => void;
}

const MatchingButton: React.FC<MatchingButtonProps> = ({ onClick }) => {
  return <StyledButton onClick={onClick}>짝꿍 매칭 시작</StyledButton>;
};

export default MatchingButton;
