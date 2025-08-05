import { Box, Typography } from '@mui/material';
import React from 'react';

const Loading = () => {
  return (
    <Box
      height={'100vh'}
      width={'100vw'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography>Loading</Typography>
    </Box>
  );
};

export default Loading;
