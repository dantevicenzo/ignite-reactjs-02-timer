import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <CyclesContextProvider>
      <Router />
    </CyclesContextProvider>
  )
}
