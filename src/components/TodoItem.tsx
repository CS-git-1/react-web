import { Checkbox, IconButton, Paper, Typography } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <Paper component="li" elevation={0} className={`todo-item${todo.completed ? ' is-completed' : ''}`}>
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
        inputProps={{ 'aria-label': `${todo.completed ? 'Reopen' : 'Complete'} ${todo.title}` }}
      />
      <Typography component="span" className="todo-title">{todo.title}</Typography>
      <IconButton
        className="delete-button"
        aria-label={`Delete ${todo.title}`}
        onClick={() => onDelete(todo.id)}
        size="small"
      >
        <DeleteOutlineRoundedIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
}
