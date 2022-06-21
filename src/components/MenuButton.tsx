import React from 'react';
import styled from 'styled-components';

interface MenuButtonProps {
  title: string;
  onClick?(e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void;
  onChange?(): void;
}

function MenuButton({ title, onClick, onChange }: MenuButtonProps) {
  return (
    <MenuButtonWrapper onClick={onClick} onChange={onChange}>
      <div>{title}</div>
    </MenuButtonWrapper>
  );
}

const MenuButtonWrapper = styled.button`
  width: 125px;
  height: 30px;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
  border-radius: 5px;
  font-size: 12px;
`

export default MenuButton;
