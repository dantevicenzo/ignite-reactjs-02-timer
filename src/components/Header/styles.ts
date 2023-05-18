import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;

  nav {
    display: flex;
    gap: 0.5rem;

    img {
      height: 2.5rem;
      width: 2.5rem;
    }

    a {
      height: 3rem;
      width: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.color.grey7};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.color.green};
      }

      &.active {
        color: ${(props) => props.theme.color.green};
      }
    }
  }
`
