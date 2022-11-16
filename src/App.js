import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListRoute from "./pages/List";
import Create from "./pages/Create";
import DeteilRoute from "./pages/GamesDeteil/Deteil";
import UpdateRoute from "./pages/update/Update";
import DeleteGames from "./pages/DeleteGames/Delete";
import AuthProvider from "./utils/AuthProvider";
import Layout from "./Layout";

function App() {
  return (
   <AuthProvider>
    
     <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<ListRoute />} />
        <Route path="/games/:id" element={<DeteilRoute />} />
        <Route path="/games/Create" element={<Create />} />
        <Route path="/games/update/:id" element={<UpdateRoute />} />
        <Route path="/games/delete/:id" element={<DeleteGames />} />
      </Routes>
      </Layout>
    </BrowserRouter>
    
   </AuthProvider>
  );
}

export default App;
