import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./router";
import { renderRoutes } from "./utils/route.utils";
import { ToastContainer } from "react-toastify";
import config from "./config";
import ProtectedRoute from "./router/ProtectedRoute";
import Home from "./pages/public/Home/Home";
import DefaultLayout from "./layout/DefaultLayout";
function App() {
  return (
    // const isAuth = useSelector(isAuthSelector);
    // const isAuth = useSelector(isAuthSelector);

    <Router>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          {/* PUBLIC ROUTES */}
          {renderRoutes(publicRoutes)}
          <Route>{renderRoutes(publicRoutes)}</Route>
          {/* NOTE FOUND */}
          <Route
            path="*"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
