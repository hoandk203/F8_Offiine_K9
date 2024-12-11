import Welcome from "./components/Welcome.jsx";
import Form from "./components/Form.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { AppContext } from "./core/Provider.jsx";
import Loading from "./components/Loading.jsx";
function App() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { state } = useContext(AppContext);

    return (
        <>
            {isLoading && <Loading/>}
            {state.isLoading && <Loading/>}

            {!isAuthenticated && <Welcome/>}

            {isAuthenticated && <Form user={user}/>}

        </>
    )
}

export default App
