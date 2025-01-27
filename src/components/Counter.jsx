import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useStore } from "../store";

const Counter = () => {
  const { count, increment, decrement } = useStore();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={3}
      borderRadius={2}
      boxShadow={3}
    >
      <Typography variant="h4" gutterBottom>
        Count: {count}
      </Typography>
      <Box display="flex" gap={2}>
        <Button variant="outlined" color="primary" onClick={increment}>
          Increment
        </Button>
        <Button variant="outlined" color="secondary" onClick={decrement}>
          Decrement
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
