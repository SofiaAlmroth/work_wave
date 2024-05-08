import UsersPage from "./components/UsersPage";
import UsersProvider from "./components/context/UsersContext";

function App() {
  return (
    <UsersProvider>
      <UsersPage />
    </UsersProvider>
  );
}

export default App;
