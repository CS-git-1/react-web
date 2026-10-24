import { useState, type FormEvent } from 'react';
import { Button, InputAdornment, TextField } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="What needs to get done?"
        inputProps={{ maxLength: 160, 'aria-label': 'New task' }}
        InputProps={{
          startAdornment: <InputAdornment position="start"><EditNoteRoundedIcon className="input-icon" /></InputAdornment>,
        }}
      />
      <Button type="submit" variant="contained" startIcon={<AddRoundedIcon />} disabled={!title.trim()}>
        Add task
      </Button>
    </form>
  );
}
