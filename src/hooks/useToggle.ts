import { useState, useCallback } from 'react'

export type useToggleType = {
  value: boolean;
  onSetTrue: () => void;
  onSetFalse: () => void;
}

const useToggle = (initState = false) => {
  const [value, setValue] = useState(initState)

  const onSetTrue = useCallback(() => {
    setValue(true)
  }, [setValue])

  const onSetFalse = useCallback(() => {
    setValue(false)
  }, [setValue])

  return {
    value,
    onSetTrue,
    onSetFalse
  }
}

export default useToggle
