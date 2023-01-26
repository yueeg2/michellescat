import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function IconButtons({ label, children }: any) {
  return (
    <IconButton aria-label={label} size="small" sx={{
      border: 0,
    }} onClick={() => {
      window.open('https://www.instagram.com/silenceseller/', '_blank');
    }}>
      {children}
    </IconButton>
  );
}