import AllRoutes from "./components/AllRoutes";
import GlobalState from "./helpers/GlobalState";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  const { globalState, reducer } = GlobalState();

  return (
    <GlobalContext.Provider value={{globalState, reducer}}>
      <AllRoutes />
    </GlobalContext.Provider>
  );
}

export default App;
