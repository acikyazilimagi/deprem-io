import { useCallback, useState } from 'react'

export const useToggle = (initialState = false): [boolean, () => void] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState)

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state: boolean) => !state), [])

  return [state, toggle]
}
