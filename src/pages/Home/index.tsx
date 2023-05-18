import { Play } from '@phosphor-icons/react'
import {
  HomeContainer,
  Number,
  Separator,
  CountdownContainer,
  InputContainer,
  Button,
  Input,
  InputNumber,
  InputText,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <InputContainer>
        <span>Vou trabalhar em</span>
        <InputText type="text" placeholder="Dê um nome para o seu projeto" />
        <span>durante</span>
        <InputNumber type="number" />
        <span>minutos</span>
      </InputContainer>

      <CountdownContainer>
        <Number>0</Number>
        <Number>0</Number>
        <Separator>:</Separator>
        <Number>0</Number>
        <Number>0</Number>
      </CountdownContainer>

      <Button>
        <Play size={24} />
        Começar
      </Button>
    </HomeContainer>
  )
}
