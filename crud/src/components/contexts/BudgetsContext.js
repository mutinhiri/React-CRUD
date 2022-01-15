import React, { useContext, useState } from "react"

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
    
  }

  function addExpenses() {
    
  }
  function addBudget() {

  }

  function deleteBudget() {
    
  }

  function deleteExpense() {
    
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