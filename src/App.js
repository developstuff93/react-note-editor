import AppStateProvider from "./components/AppStateProvider";
import SidePanel from "./components/SidePanel";
import "./App.css";
import EditPanel from "./components/EditPanel";

function App() {
  return (
    <AppStateProvider>
      <div className="app-container">
        <SidePanel />
        <EditPanel />
      </div>
    </AppStateProvider>
  );
}

export default App;
