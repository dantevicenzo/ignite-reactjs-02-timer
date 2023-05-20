import { ReactNode, createContext, useState } from 'react'

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
  const [cycles, setCycles] = useState<ICycle[]>([])
  const [currentCycleId, setCurrentCycleId] = useState<string | null>(null)

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

    setCycles((state) => [...state, newCycle])
    setCurrentCycleId(id)

    // reset()
  }

  function completeCurrentCycle() {
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
