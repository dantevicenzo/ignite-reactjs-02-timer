import styled from 'styled-components'

export const HistoryContainer = styled.div`
  margin: 3.125rem 6rem;

  h1 {
    font-size: 1.5rem;
  }
`
export const StyledTable = styled.table`
  margin-top: 2rem;
  font-size: 0.875rem;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.25rem;
  text-align: left;

  th {
    background-color: ${(props) => props.theme.color.grey3};

    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }
  }

  td {
    background-color: ${(props) => props.theme.color.grey8};
  }

  th,
  td {
    padding: 1rem 1.5rem;
    text-align: left;
    &:first-child {
      width: 50%;
    }
  }
`

interface StatusProps {
  statusColor: 'inProgress' | 'interrupted' | 'completed'
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    background-color: ${(props) => props.theme.color[props.statusColor]};
  }
`
