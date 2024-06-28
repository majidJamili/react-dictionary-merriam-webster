import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function AvatarChipsApp({label, source}) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        // avatar={<Avatar src={source} />}
        label={label ? `Hi! ${label}`:label}
        color='primary'
        // variant="contained"
      />
    </Stack>
  );
}

export default AvatarChipsApp;