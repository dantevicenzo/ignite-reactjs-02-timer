import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${(props) => props.theme.color.grey7};

  font-weight: bold;
  font-size: 1.125rem;
`

const BaseInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.color.grey4};

  padding: 0.5rem;

  color: ${(props) => props.theme.color.grey7};

  font-weight: bold;
  font-size: 1.125rem;

  :focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.color.green};
  }
`

export const InputText = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const InputNumber = styled(BaseInput)`
  width: 4rem;
`
