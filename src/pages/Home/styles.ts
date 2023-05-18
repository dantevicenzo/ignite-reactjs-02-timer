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

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.color.grey4};
  padding: 0.5rem;

  color: ${(props) => props.theme.color.grey7};

  font-weight: bold;
  font-size: 1.125rem;
`

export const InputText = styled(Input)`
  flex: 1;
`

export const InputNumber = styled(Input)`
  width: 4.625rem;
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
  background-color: #29292e;

  border-radius: ${(props) => props.theme.borderRadius};
`
export const Separator = styled(CowntdownItem)`
  color: ${(props) => props.theme.color.green};
`
export const Button = styled.button`
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
  background-color: ${(props) => props.theme.color.green};

  &:hover:enabled {
    background-color: ${(props) => props.theme.color.greenDark};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
