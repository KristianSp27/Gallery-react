import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { AuthProvider } from "./context/auth";
import { PublicRoute } from "./routes/PublicRoute";

function App() {

  return (
    <AuthProvider>
       <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={
        <PublicRoute>
          <Signup/>
        </PublicRoute>
      } />
    </Routes>
    </AuthProvider>
   

  );
}

export default App;
