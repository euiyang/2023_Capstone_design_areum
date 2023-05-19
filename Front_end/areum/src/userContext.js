import { createContext } from "react";

const Context = createContext({
    loggedUser: {
        username: '',
        email: '',
        first_name: '',
    },
    loggedIn: false,
    setLoggedUser: () => {},
    setLoggedIn: () => {}
});

export default Context;