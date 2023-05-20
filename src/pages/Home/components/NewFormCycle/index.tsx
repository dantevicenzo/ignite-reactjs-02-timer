import { InputContainer, InputNumber, InputText } from './styles'

import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewFormCycle() {
  const { isCurrentCycleActive } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <InputContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <InputText
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={isCurrentCycleActive}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <InputNumber
        type="number"
        min="1"
        max="60"
        step="5"
        id="minutesAmount"
        placeholder="00"
        disabled={isCurrentCycleActive}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <label htmlFor="minutesAmount">minutos.</label>
    </InputContainer>
  )
}
