import { Button, ButtonGroup } from '@mui/material';
import type { TodoFilter } from '../types/todo';

interface TodoFiltersProps {
  current: TodoFilter;
  onChange: (filter: TodoFilter) => void;
  counts: Record<TodoFilter, number>;
}

const filters: { value: TodoFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'In progress' },
  { value: 'completed', label: 'Completed' },
];

export default function TodoFilters({ current, onChange, counts }: TodoFiltersProps) {
  return (
    <ButtonGroup className="todo-filters" aria-label="Filter tasks" variant="text">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          className={current === filter.value ? 'filter-button selected' : 'filter-button'}
          aria-pressed={current === filter.value}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}<span className="filter-count">{counts[filter.value]}</span>
        </Button>
      ))}
    </ButtonGroup>
  );
}
