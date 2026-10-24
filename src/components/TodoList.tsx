import { Box, Typography } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import TodoItem from './TodoItem';
import type { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  hasTasks: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, hasTasks, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    const EmptyIcon = hasTasks ? CheckCircleOutlineRoundedIcon : ListAltRoundedIcon;
    return (
      <Box className="empty-state" role="status">
        <Box className="empty-icon"><EmptyIcon /></Box>
        <Typography className="empty-title">{hasTasks ? 'All clear!' : 'A fresh start'}</Typography>
        <Typography className="empty-copy">
          {hasTasks ? 'There are no tasks in this view.' : 'Add a task above and make today count.'}
        </Typography>
      </Box>
    );
  }

  return (
    <Box component="ul" className="todo-list" aria-label="Tasks">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </Box>
  );
}
