import React from "react";
import styled from "styled-components";

const colors = {
  ai: "lightpink",
  app: "skyblue",
  web: "yellow",
  server: "lightgreen",
  pm: "orange",
};

const NameBlock = styled.span<{ part: string }>`
  display: inline-block;
  padding: 10px;
  margin: 5px;
  width: 130px;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: ${({ part }) => colors[part as keyof typeof colors]};
  color: black;
`;

interface MemberNameProps {
  name: string;
  part: string;
  deleteMember: (name: string) => void;
}

const MemberName: React.FC<MemberNameProps> = ({
  name,
  part,
  deleteMember,
}) => {
  return (
    <NameBlock onClick={() => deleteMember(name)} part={part}>
      {name}
    </NameBlock>
  );
};

export default MemberName;
