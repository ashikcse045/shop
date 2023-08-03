import AllRoutes from "./components/AllRoutes";
import GlobalState from "./helpers/GlobalState";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  const { globalState, dispatch } = GlobalState();

  return (
    <GlobalContext.Provider value={{globalState, dispatch}}>
      <AllRoutes />
    </GlobalContext.Provider>
  );
}

export default App;
