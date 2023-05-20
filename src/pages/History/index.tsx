import { useContext } from 'react'
import { HistoryContainer, Status, StyledTable } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

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
          {cycles.map((cycle) => (
            <tr key={cycle.id}>
              <td>{cycle.task}</td>
              <td>{cycle.minutesAmount}</td>
              <td>{cycle.startDate.toDateString()}</td>
              <td>
                {cycle.status === 'completed' && (
                  <Status statusColor="completed">Concluído</Status>
                )}
                {cycle.status === 'inProgress' && (
                  <Status statusColor="inProgress">Em Progresso</Status>
                )}
                {cycle.status === 'interrupted' && (
                  <Status statusColor="interrupted">Interrompido</Status>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </HistoryContainer>
  )
}
