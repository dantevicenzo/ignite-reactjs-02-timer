import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 4.5rem auto;
`
const BaseButton = styled.button`
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
export const StartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.color.green};

  &:hover:enabled {
    background-color: ${(props) => props.theme.color.greenDark};
    cursor: pointer;
  }
`
export const InterruptButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.color.red};

  &:hover:enabled {
    background-color: ${(props) => props.theme.color.redDark};
    cursor: pointer;
  }
`
