import styled from 'styled-components'

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
