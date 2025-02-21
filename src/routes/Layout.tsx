import { Box, Container, Grid } from "@chakra-ui/react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { routes } from "@/app/routes";
import { Button } from "@/components/ui/button";
import { isAuthenticated } from "@/app/utils";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Container w="full" fluid>
      <Grid gap={8} templateColumns="1fr 3fr" w="full">
        <Box as="ul">
          {isAuthenticated() && (
            <>
              {routes.map((route, i) => (
                <Box as="li" key={i} textTransform="capitalize">
                  <NavLink to={route.path}>
                    <Button variant="surface" w="full" as="span" borderRadius={0}>
                      {route.path.slice(1)}
                    </Button>
                  </NavLink>
                </Box>
              ))}
              <Box p={4}>
                <Button onClick={handleLogout}>Logout</Button>
              </Box>
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
