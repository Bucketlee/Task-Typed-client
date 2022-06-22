import React from 'react';
import styled from 'styled-components';

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
          <ImageWrapper
            src={process.env.PUBLIC_URL + '/images/edit.png'}
            alt='resource-label-edit'
          />
        </OptionButtonWrapper>
        <OptionButtonWrapper onClick={() => onDeleteButtonClick()}>
          <ImageWrapper
            src={process.env.PUBLIC_URL + '/images/delete.png'}
            alt='resource-label-delete'
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
  background: inherit;
  border: none;
`

const ImageWrapper = styled.img`
  width: 20px;
  height: 20px;
`

export default ResourceLabelView;
