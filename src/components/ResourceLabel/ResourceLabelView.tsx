import React from 'react';
import styled from 'styled-components';

import { TypedIcon } from 'typed-design-system';

interface ResourceLabelViewProps {
  value: string;
  isEditing: boolean;
  onInputValueChange(newValue: string): void;
  onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
  onEditButtonClick(): void;
  onDeleteButtonClick(): void;
}

function ResourceLabelView({
  value,
  isEditing,
  onInputValueChange,
  onInputKeyDown,
  onEditButtonClick,
  onDeleteButtonClick,
}: ResourceLabelViewProps) {
  return (
    <ResourceLabelViewWrapper>
      <div>
        {!isEditing ?
          <TitleWrapper>{value}</TitleWrapper> :
          <EditInputWrapper
            type='text'
            defaultValue={value}
            onChange={(e) => onInputValueChange(e.target.value)}
            onKeyDown={(e) => onInputKeyDown(e)}
          />
        }
      </div>
      <OptionWrapper>
        <OptionButtonWrapper onClick={() => onEditButtonClick()}>
          <TypedIcon
            icon='edit_small'
            style={{ width: '20px', height: '20px' }}
          />
        </OptionButtonWrapper>
        <OptionButtonWrapper onClick={() => onDeleteButtonClick()}>
          <TypedIcon
            icon='trash_small'
            style={{ width: '15px', height: '15px' }}
          />
        </OptionButtonWrapper>
      </OptionWrapper>
    </ResourceLabelViewWrapper>
  );
}

const ResourceLabelViewWrapper = styled.div`
  padding: 12px;
  width: 236px;
  height: 66px;
  display: grid;
  grid-template-rows: auto 20px;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: 14px;
`

const TitleWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  text-align: left;
`
const EditInputWrapper = styled.input`
  width: 100%;
  height: 30px;
`

const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const OptionButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background: inherit;
  border: none;
`

export default ResourceLabelView;
