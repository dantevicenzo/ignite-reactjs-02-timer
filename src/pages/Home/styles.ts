import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 4.5rem auto;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${(props) => props.theme.color.grey7};

  font-weight: bold;
  font-size: 1.125rem;
`

export const BaseInput = styled.input`
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

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3.75rem;
  margin-bottom: 3.5rem;
`
const CowntdownItem = styled.span`
  height: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
`
export const Number = styled(CowntdownItem)`
  width: 8rem;

  color: ${(props) => props.theme.color.grey7};
  background-color: ${(props) => props.theme.color.grey8};

  border-radius: ${(props) => props.theme.borderRadius};
`
export const Separator = styled(CowntdownItem)`
  color: ${(props) => props.theme.color.green};
`
const Button = styled.button`
  width: 100%;

  font-size: 1rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: ${(props) => props.theme.borderRadius};
  border: none;

  padding: 1rem 2.5rem;

  color: ${(props) => props.theme.color.grey7};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartButton = styled(Button)`
  background-color: ${(props) => props.theme.color.green};

  &:hover:enabled {
    background-color: ${(props) => props.theme.color.greenDark};
    cursor: pointer;
  }
`
export const InterruptButton = styled(Button)`
  background-color: ${(props) => props.theme.color.red};

  &:hover:enabled {
    background-color: ${(props) => props.theme.color.redDark};
    cursor: pointer;
  }
`
