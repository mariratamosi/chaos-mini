import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Comp,
  loggedIn,
  path,
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return localStorage.getItem("loggedin") ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};
