import Signin from "./screen/Signin";
import AdminDashboard from "./screen/admin/AdminDashboard";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import Store from "./redux/store"

function App() {
  return (
    <BrowserRouter>
    <Provider store={Store}>
        <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/admin/" element={<AdminDashboard/>}/>
        </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
