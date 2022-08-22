import ExpenseList from "./ExpanseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
    <h1>
      <ExpenseListFilters />
      <ExpenseList />
    </h1>
)

export default ExpenseDashboardPage;