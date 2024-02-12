import React from "react";
import styled from "styled-components";
import MemberName from "./MemberName";

const List = styled.ul<{ columns: number }>`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  justify-items: center;
`;

const ListItem = styled.li`
  padding: 10px;
  text-align: center;
`;

interface MemberListProps {
  members: { name: string; part: string }[][];
  columns: number;
  deleteMember: (name: string) => void;
}

const MemberList: React.FC<MemberListProps> = ({
  members,
  columns,
  deleteMember,
}) => {
  return (
    <List columns={columns}>
      {members.map((pair, index) => (
        <ListItem key={index}>
          {pair[0] && (
            <MemberName
              name={pair[0].name}
              part={pair[0].part}
              deleteMember={deleteMember}
            />
          )}
          {pair[1] && (
            <MemberName
              name={pair[1].name}
              part={pair[1].part}
              deleteMember={deleteMember}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default MemberList;
