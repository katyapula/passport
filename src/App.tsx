import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "@/app/routes";

function App() {

  // TODO:
  //  1. Add BrowserRouter from react-router
  //  2. Add 2 types of routes: PublicRoute and PrivateRoute
  //  3. Create dummy auth: login hardcoded user, store token in localStorage
  //  3.1 Check if user creads are correct const validUser = { email: "sasa@gmail.com", password: "1234" }
  //  token = base64(email+password)
  //  3.2 If not show validation errors
  //  4. In case user entered correct creds, generate authToken and store ti in localStorage\
  //  5. Use authToken to determine whether user is logged in or not

  return (
    <RouterProvider router={router} />
  );
}

export default App;
