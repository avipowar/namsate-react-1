const { createContext } = require("react");

const userContext = createContext({
  loggedUser: "Default User",
});

export default userContext;
