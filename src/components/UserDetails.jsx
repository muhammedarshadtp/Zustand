import { useEffect } from "react";
import { useUserStore } from "../userStore";
import { CircularProgress, Typography, Container, Box } from '@mui/material';

const UserDetails = () => {
  const { user, loading, error, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser(1);
  }, [fetchUser]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      {user && (
        <Box mt={4}>
          <Typography variant="h4" component="h1">
            {user.name}
          </Typography>
          <Typography variant="body1">{user.email}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default UserDetails;