import { HistoryContainer, Status, StyledTable } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <StyledTable>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status statusColor="inProgress">Em andamento</Status>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status statusColor="completed">Em andamento</Status>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status statusColor="interrupted">Em andamento</Status>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status statusColor="inProgress">Em andamento</Status>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status statusColor="inProgress">Em andamento</Status>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status statusColor="inProgress">Em andamento</Status>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status statusColor="inProgress">Em andamento</Status>
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </HistoryContainer>
  )
}
