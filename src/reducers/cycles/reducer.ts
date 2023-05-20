import { ICycle } from '../../contexts/CyclesContext'
import { produce } from 'immer'
import { ActionType } from './actions'

interface ICyclesState {
  cycles: ICycle[]
  currentCycleId: string | null
}

export function cyclesReducer(state: ICyclesState, action: any) {
  switch (action.type) {
    case ActionType.CREATE_NEW_CYCLE: {
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.currentCycleId = action.payload.newCycle.id
      })
    }
    case ActionType.COMPLETE_CURRENT_CYCLE: {
      return produce(state, (draft) => {
        const currentCycleIndex = draft.cycles.findIndex(
          (cycle) => cycle.id === draft.currentCycleId,
        )
        draft.cycles[currentCycleIndex].endDate = new Date()
        draft.cycles[currentCycleIndex].status = 'completed'
        draft.currentCycleId = null
      })
    }
    case ActionType.INTERRUPT_CURRENT_CYCLE: {
      return produce(state, (draft) => {
        const currentCycleIndex = draft.cycles.findIndex(
          (cycle) => cycle.id === draft.currentCycleId,
        )
        draft.cycles[currentCycleIndex].endDate = new Date()
        draft.cycles[currentCycleIndex].status = 'interrupted'
        draft.currentCycleId = null
      })
    }
    default: {
      return state
    }
  }
}
