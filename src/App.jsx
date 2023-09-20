import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import PrivateRoute from "./Components/PrivateRoute";
import Search from "./Components/Search";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route  index path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
