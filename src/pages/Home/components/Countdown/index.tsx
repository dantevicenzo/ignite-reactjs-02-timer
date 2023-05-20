import { useContext, useEffect, useState } from 'react'
import { CountdownContainer, Number, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown() {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const { currentCycle, completeCurrentCycle } = useContext(CyclesContext)

  const totalSecondsAmount = currentCycle ? currentCycle.minutesAmount * 60 : 0

  const totalSecondsAmountLeft = currentCycle
    ? totalSecondsAmount - amountSecondsPassed
    : 0

  const minutesAmountLeft = Math.floor(totalSecondsAmountLeft / 60)
  const secondsAmountLeft = totalSecondsAmountLeft % 60

  const minutesLeft = String(minutesAmountLeft).padStart(2, '0')
  const secondsLeft = String(secondsAmountLeft).padStart(2, '0')

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

  return (
    <CountdownContainer>
      <Number>{minutesLeft[0]}</Number>
      <Number>{minutesLeft[1]}</Number>
      <Separator>:</Separator>
      <Number>{secondsLeft[0]}</Number>
      <Number>{secondsLeft[1]}</Number>
    </CountdownContainer>
  )
}
