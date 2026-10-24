import { Box, Typography } from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

export default function AppHeader() {
  return (
    <Box component="header" className="app-header">
      <Box className="brand-mark" aria-hidden="true">
        <AutoAwesomeRoundedIcon />
      </Box>
      <Box>
        <Typography className="brand-name">daylist</Typography>
        <Typography className="brand-caption">A little more focus, every day</Typography>
      </Box>
      <Typography className="today-label">
        {new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date())}
      </Typography>
    </Box>
  );
}
