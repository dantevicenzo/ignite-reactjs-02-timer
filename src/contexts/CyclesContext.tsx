import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { cyclesReducer } from '../reducers/cycles/reducer'
import {
  completeCurrentCycleAction,
  createNewCycleAction,
  interruptCurrentCycleAction,
} from '../reducers/cycles/actions'

interface ICreateCycleData {
  task: string
  minutesAmount: number
}

export interface ICycle {
  id: string
  task: string
  minutesAmount: number
  status: 'inProgress' | 'interrupted' | 'completed'
  startDate: Date
  endDate?: Date
}

interface ICyclesContext {
  cycles: ICycle[]
  currentCycle: ICycle | undefined
  currentCycleId: String | null
  isCurrentCycleActive: boolean
  completeCurrentCycle: () => void
  createNewCycle: (data: ICreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as ICyclesContext)

interface ICyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: ICyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      currentCycleId: null,
    },
    (initialState) => {
      const storedStateAsString = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedStateAsString) {
        console.log(JSON.parse(storedStateAsString))
        return JSON.parse(storedStateAsString)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  const { cycles, currentCycleId } = cyclesState

  const currentCycle = cycles.find((cycle) => cycle.id === currentCycleId)
  const isCurrentCycleActive = currentCycle != null

  function createNewCycle(data: ICreateCycleData) {
    const startDate = new Date()
    const id = String(startDate.getTime())

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      status: 'inProgress',
      startDate,
    }

    dispatch(createNewCycleAction(newCycle))
  }

  function completeCurrentCycle() {
    dispatch(completeCurrentCycleAction())
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        currentCycle,
        currentCycleId,
        completeCurrentCycle,
        isCurrentCycleActive,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
