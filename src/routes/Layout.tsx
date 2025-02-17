import { Box, Container, Grid } from "@chakra-ui/react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { routes } from "@/app/routes";
import { Button } from "@/components/ui/button";
import { isAuthenticated } from "@/app/utils";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container w="full" fluid>
      {isAuthenticated() && (
        <Box as="header" p={4} bg="surface">
          <Button onClick={handleLogout}>Logout</Button>
        </Box>
      )}
      <Grid gap={8} templateColumns="1fr 3fr" w="full">
        <Box as="ul">
          {isAuthenticated() && (
            <>
              {routes.map((route, i) => (
                <Box as="li" key={i} textTransform="capitalize">
                  <NavLink to={route.path}>
                    <Button variant="surface" w="full" as="span">
                      {route.path.slice(1)}
                    </Button>
                  </NavLink>
                </Box>
              ))}
            </>
          )}
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Grid>
    </Container>
  );
}
