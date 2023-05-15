import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes, adminRouter } from "./router";
import { renderRoutes } from "./utils/route.utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "./config";
import ProtectedRoute from "./router/ProtectedRoute";
import Home from "./pages/public/Home/Home";
import DefaultLayout from "./layout/DefaultLayout";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((state) => state.auth);
  console.log(auth.role);
  return (
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

          {/* PRIVATE ROUTES */}
          {/* For ALL */}
          <Route
            element={
              <ProtectedRoute
                redirectPath={config.routes.accounts}
                isAllowed={auth.role === "user"}
              />
            }
          >
            {renderRoutes(privateRoutes)}
          </Route>
          {/* For Admin */}
          <Route
            element={
              <ProtectedRoute
                redirectPath={config.routes.home}
                isAllowed={auth?.role === "admin"}
              ></ProtectedRoute>
            }
          >
            {renderRoutes(adminRouter)}
          </Route>
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
