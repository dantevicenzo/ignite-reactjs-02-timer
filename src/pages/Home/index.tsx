import { Play } from '@phosphor-icons/react'
import {
  HomeContainer,
  Number,
  Separator,
  CountdownContainer,
  InputContainer,
  Button,
  InputNumber,
  InputText,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <InputContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputText
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <InputNumber
            type="number"
            min="5"
            max="60"
            step="5"
            id="minutesAmount"
            placeholder="00"
          />

          <label htmlFor="minutesAmount">minutos.</label>
        </InputContainer>

        <CountdownContainer>
          <Number>0</Number>
          <Number>0</Number>
          <Separator>:</Separator>
          <Number>0</Number>
          <Number>0</Number>
        </CountdownContainer>

        <Button type="submit">
          <Play size={24} />
          Começar
        </Button>
      </form>
    </HomeContainer>
  )
}
