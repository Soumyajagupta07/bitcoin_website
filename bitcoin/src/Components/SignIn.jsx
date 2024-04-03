import * as React from 'react';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      
      <Button variant="contained" startIcon={< PermIdentityIcon/>} style={{borderRadius:'20px', backgroundColor: 'black'}}>
        Sign In
      </Button>
    </Stack>
  );
}