import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MatchingButton from "./components/MatchingButton";
import MemberList from "./components/MemberList";
import { members as initialMembers } from "./constants/members";
import FrontBlock from "./components/FrontBlock";
import { shuffleArray, makePairs } from "./utils/matchMaking";
import ColumnSelector from "./components/ColumnSelector";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListWrapper = styled.div`
  height: 80%;
  overflow: auto;
`;

function App() {
  const [members, setMembers] = useState(initialMembers);
  const [matchedMembers, setMatchedMembers] = useState<
    { name: string; part: string }[][]
  >([]);
  const [column, setColumn] = React.useState(4);

  const handleClick = React.useCallback(() => {
    const shuffledMembers = shuffleArray(members);
    const pairs = makePairs(shuffledMembers);
    setMatchedMembers(pairs);
  }, [members]);

  useEffect(() => {
    handleClick();
  }, [handleClick]);

  const deleteMember = (name: string) => {
    setMembers(members.filter((member) => member.name !== name));
  };

  return (
    <Wrapper>
      <Header>
        <ColumnSelector
          column={column}
          setColumn={setColumn}
          maxColumn={matchedMembers.length}
        />
        <MatchingButton onClick={handleClick} />
      </Header>
      <FrontBlock />
      <ListWrapper>
        {matchedMembers.length > 0 && (
          <MemberList
            members={matchedMembers}
            columns={column}
            deleteMember={deleteMember}
          />
        )}
      </ListWrapper>
    </Wrapper>
  );
}

export default App;
