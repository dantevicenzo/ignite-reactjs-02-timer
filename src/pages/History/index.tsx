import { useContext } from 'react'
import { HistoryContainer, Status, StyledTable } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

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
              <td>{cycle.minutesAmount} minutos</td>
              <td>
                {formatDistanceToNow(cycle.startDate, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </td>
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
