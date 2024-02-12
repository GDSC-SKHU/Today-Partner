import React from "react";
import styled from "styled-components";

const FrontBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  width: 95%;
  background-color: #a5e8cf;
  border-radius: 10px;
  padding: 10px;
`;

const FrontBlockText = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const FrontBlock: React.FC = () => {
  return (
    <FrontBlockWrapper>
      <FrontBlockText>칠판</FrontBlockText>
    </FrontBlockWrapper>
  );
};

export default FrontBlock;
