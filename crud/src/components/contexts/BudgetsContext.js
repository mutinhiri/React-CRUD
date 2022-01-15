import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from 'uuid'

const BudgetsContext = React.createContext

export function useBudgets() {
  return useContext(BudgetsContext)
  
}

{
  id:
  name:
  max
}

{
  id:
  budgetId:
  amount:
  description
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudget] = useState([])
  const [expenses, setExpenses] = useState([])
  

  function getBudgetExpenses(budgetId) {
    return expenses.filter(expense => expense.budgetId == budgetId)
    
  }

  function addExpenses({description, amount, budgetId}) {
      setExpenses(prevExpense => {
        return [...prevExpense, {id: uuidV4(), description, amount, budgetId }]
    })
    
  }
  function addBudget({name,max}) {
    setBudget(prevBudget => {
      if (prevBudget.find(budget => budget.name === name)) {
        return prevBudget
      }
      return [...prevBudget, {id: uuidV4(), name, max }]
    })
  }

  function deleteBudget({ id }) {
    setBudget(prevBudget => {
      return prevBudget.filter(budget => budget.id !== id)
    })
  }

  function deleteExpense({ id }) {
    setExpenses(prevExpense => {
      return prevExpense.filter(expense => expense.id !== id)
    })  
  }

  return (
    <BudgetsContext.Provider value={{
      budgets,
      expenses,
      getBudgetExpenses,
      addExpenses,
      addBudget,
      deleteBudget,
      deleteExpense
    }}>{children}</BudgetsContext.Provider>
  )
}