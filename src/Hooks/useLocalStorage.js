import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [loading, setLoading] = useState(false)
  const [storedValue, setStoredValue] = useState(null)

  useEffect(() => {
    try {
      setLoading(true);
      const item = window.localStorage.getItem(key);
      const parseditem = item ? JSON.parse(item) : initialValue;
      setStoredValue(parseditem)
    } catch (error) {
      setStoredValue(initialValue)
    } finally {
      setLoading(false);
    }
  }, [key])

  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  return [storedValue, setValue, loading]
}