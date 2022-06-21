import React from 'react';
import styled from 'styled-components';

import MenuButton from '../MenuButton';

interface MenuViewProps {
  onAddUrlButtonClick(): void;
  isUrlInputOpen: boolean;
  onUrlInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
  onUrlInputChange(newValue: string): void;
  onUrlInputBlur(): void;
  onAddImageButtonClick(): void;
  hiddenFileInput: React.MutableRefObject<null>;
  onImageInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

function MenuView({
  onAddUrlButtonClick,
  isUrlInputOpen,
  onUrlInputKeyDown,
  onUrlInputChange,
  onUrlInputBlur,
  onAddImageButtonClick,
  hiddenFileInput,
  onImageInputChange,
}: MenuViewProps) {
  return (
    <MenuViewWrapper>
      <div>
        <MenuButton
          title={'URL 추가'}
          onClick={onAddUrlButtonClick}
        />
        {isUrlInputOpen ? (
          <AddUrlWrapper>
            <AddUrlInputWrapper
              type='url'
              name='urlInput'
              onKeyDown={onUrlInputKeyDown}
              onChange={(e) => onUrlInputChange(e.target.value)}
              onBlur={onUrlInputBlur}
            />
          </AddUrlWrapper>
          ) :
          <></>
        }
      </div>
      <div>
        <MenuButton
          title={'이미지 추가'}
          onClick={onAddImageButtonClick}
        />
        <AddImageInputWrapper
          ref={hiddenFileInput}
          type='file'
          name='filesInput'
          accept='image/*'
          onChange={(e) => onImageInputChange(e)}
          multiple
        />
      </div>
    </MenuViewWrapper>
  );
}

const MenuViewWrapper = styled.div`
  margin-bottom: 3px;
  width: 280px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 5px 5px -5px gray;
`

const AddUrlWrapper = styled.div`
  position: fixed;
  left: 10px;
  top: 45px;
  width: 260px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #ffffff;
`

const AddUrlInputWrapper = styled.input`
  margin: auto;
  width: 250px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #f7f7f7;
`

const AddImageInputWrapper = styled.input`
  display: none;
`

export default MenuView;
