import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from '../components/Dashboard';
import CreateExpensePage from '../components/CreateExpense';
import EditExpensePage from '../components/EditExpense';
import HelpPage from '../components/Help';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';



const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<ExpenseDashboardPage />} />
          <Route path="/create" element={<CreateExpensePage />} />
          <Route path="/edit/:id" element={<EditExpensePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
)

export default AppRouter;