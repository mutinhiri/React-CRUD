import React, { useContext } from "react"

const BudgetsContext = React.createContext

export function useBudgets() {
  return useContext(BudgetsContext)
  
}

export const BudgetsProvider = ({ children }) => {
  const budgets = useState([])
  const expenses = []

  function getBudgetExpenses() {
    
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