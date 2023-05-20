import { Countdown } from '../Home/components/Countdown'
import { NewFormCycle } from '../Home/components/NewFormCycle'
import { HandPalm, Play } from '@phosphor-icons/react'
import { HomeContainer, InterruptButton, StartButton } from './styles'
import zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../contexts/CyclesContext'
import { useContext } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe o nome do seu projeto'),
  minutesAmount: zod
    .number()
    .min(1, 'O valor mínimo é 1')
    .max(60, 'O valor máximo é 60'),
})

export type TNewCycleFormDate = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const newCycleForm = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { watch, handleSubmit, reset } = newCycleForm

  const watchTask = watch('task', '')
  const isTaskInputEmpty = !watchTask.trim()

  const { createNewCycle, isCurrentCycleActive, interruptCurrentCycle } =
    useContext(CyclesContext)

  function handleCreateNewCycle(data: TNewCycleFormDate) {
    createNewCycle(data)
    reset()
  }
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewFormCycle />
        </FormProvider>
        <Countdown />

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
