import { HandPalm, Play } from '@phosphor-icons/react'
import {
  HomeContainer,
  Number,
  Separator,
  CountdownContainer,
  InputContainer,
  InputNumber,
  InputText,
  InterruptButton,
  StartButton,
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { useCallback, useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe o nome do seu projeto'),
  minutesAmount: zod
    .number()
    .min(1, 'O valor mínimo é 1')
    .max(60, 'O valor máximo é 60'),
})

type TNewCycleFormDate = zod.infer<typeof newCycleFormValidationSchema>

interface ICycle {
  id: string
  task: string
  minutesAmount: number
  status: 'inProgress' | 'interrupted' | 'completed'
  startDate: Date
  endDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<ICycle[]>([])
  const [currentCycleId, setCurrentCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const currentCycle = cycles.find((cycle) => cycle.id === currentCycleId)
  const isCurrentCycleActive = currentCycle != null

  const totalSecondsAmount = isCurrentCycleActive
    ? currentCycle.minutesAmount * 60
    : 0

  const totalSecondsAmountLeft = isCurrentCycleActive
    ? totalSecondsAmount - amountSecondsPassed
    : 0

  const minutesAmountLeft = Math.floor(totalSecondsAmountLeft / 60)
  const secondsAmountLeft = totalSecondsAmountLeft % 60

  const minutesLeft = String(minutesAmountLeft).padStart(2, '0')
  const secondsLeft = String(secondsAmountLeft).padStart(2, '0')

  const { register, watch, handleSubmit, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const watchTask = watch('task', '')
  const isTaskInputEmpty = !watchTask.trim()

  const completeCurrentCycle = useCallback(() => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === currentCycleId) {
          return { ...cycle, endDate: new Date(), status: 'completed' }
        } else {
          return cycle
        }
      }),
    )
    setCurrentCycleId(null)
  }, [currentCycleId])

  useEffect(() => {
    let currentInterval: number

    if (currentCycle) {
      currentInterval = setInterval(() => {
        const secondsPassedAmount = differenceInSeconds(
          new Date(),
          currentCycle.startDate,
        )
        const totalSecondsAmount = currentCycle.minutesAmount * 60

        if (secondsPassedAmount < totalSecondsAmount) {
          setAmountSecondsPassed(secondsPassedAmount)
        } else {
          completeCurrentCycle()
        }
      }, 1000)
    }

    return () => {
      clearInterval(currentInterval)
      setAmountSecondsPassed(0)
    }
  }, [currentCycle, completeCurrentCycle])

  useEffect(() => {
    if (amountSecondsPassed > 0) {
      document.title = `Ignite Timer: ${minutesLeft}:${secondsLeft}`
    } else {
      document.title = `Ignite Timer`
    }
  }, [amountSecondsPassed, minutesLeft, secondsLeft])

  function createNewCycle(data: TNewCycleFormDate) {
    const startDate = new Date()
    const id = String(startDate.getTime())

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      status: 'inProgress',
      startDate,
    }

    setCycles((state) => [...state, newCycle])
    setCurrentCycleId(id)

    reset()
  }

  function interruptCurrentCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === currentCycleId) {
          return { ...cycle, endDate: new Date(), status: 'interrupted' }
        } else {
          return cycle
        }
      }),
    )
    setCurrentCycleId(null)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)}>
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

        <CountdownContainer>
          <Number>{minutesLeft[0]}</Number>
          <Number>{minutesLeft[1]}</Number>
          <Separator>:</Separator>
          <Number>{secondsLeft[0]}</Number>
          <Number>{secondsLeft[1]}</Number>
        </CountdownContainer>

        {isCurrentCycleActive ? (
          <InterruptButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </InterruptButton>
        ) : (
          <StartButton type="submit" disabled={isTaskInputEmpty}>
            <Play size={24} />
            Começar
          </StartButton>
        )}
      </form>
    </HomeContainer>
  )
}
