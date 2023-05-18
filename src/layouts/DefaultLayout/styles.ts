import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  max-width: 70rem;
  padding-top: 2.5rem;

  background-color: ${(props) => props.theme.color.grey2};
  border-radius: ${(props) => props.theme.borderRadius};

  display: flex;
  flex-direction: column;
`
