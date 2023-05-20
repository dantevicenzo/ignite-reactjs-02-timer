import { ICycle } from '../../contexts/CyclesContext'

/* eslint-disable no-unused-vars */
export enum ActionType {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  COMPLETE_CURRENT_CYCLE = 'COMPLETE_CURRENT_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
}

export function createNewCycleAction(newCycle: ICycle) {
  return {
    type: ActionType.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function completeCurrentCycleAction() {
  return {
    type: ActionType.COMPLETE_CURRENT_CYCLE,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE,
  }
}
