import { useMemo, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import AppHeader from './components/AppHeader';
import TodoFilters from './components/TodoFilters';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import type { TodoFilter } from './types/todo';

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<TodoFilter>('all');
  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;
  const counts: Record<TodoFilter, number> = {
    all: todos.length,
    active: activeCount,
    completed: completedCount,
  };

  const visibleTodos = useMemo(() => todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  }), [filter, todos]);

  return (
    <Box className="page-shell">
      <Box className="app-container">
        <AppHeader />

        <Paper component="main" elevation={0} className="todo-card">
          <Box className="welcome-block">
            <Box className="welcome-icon"><AutoAwesomeRoundedIcon /></Box>
            <Typography component="h1" className="page-title">Make room for what matters.</Typography>
            <Typography className="page-subtitle">One thing at a time. You’ve got this.</Typography>
          </Box>

          <TodoForm onAdd={addTodo} />

          <Box className="list-toolbar">
            <Typography className="section-label">YOUR TASKS <span>{todos.length}</span></Typography>
            {completedCount > 0 && (
              <Button className="clear-button" startIcon={<DeleteSweepOutlinedIcon />} onClick={clearCompleted}>
                Clear completed
              </Button>
            )}
          </Box>

          <TodoList
            todos={visibleTodos}
            hasTasks={todos.length > 0}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />

          {todos.length > 0 && (
            <Box className="list-footer">
              <Typography className="remaining-count">
                <strong>{activeCount}</strong> {activeCount === 1 ? 'task' : 'tasks'} left to go
              </Typography>
              <TodoFilters current={filter} onChange={setFilter} counts={counts} />
            </Box>
          )}
        </Paper>

        <Typography component="footer" className="page-footer">
          Small steps add up. Keep going <span aria-hidden="true">✦</span>
        </Typography>
      </Box>
    </Box>
  );
}
