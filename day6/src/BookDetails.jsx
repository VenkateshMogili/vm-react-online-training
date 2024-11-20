import  { useContext } from 'react'
import { BookContext } from './App'

export default function BookDetails() {
  const value = useContext(BookContext);
  return (
    <div>BookDetails {value.title}</div>
  )
}
