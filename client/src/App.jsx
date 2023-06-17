import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import { lazy, Suspense } from "react";

const Signup = lazy(() => import("./pages/Auth/Signup"));
const Signin = lazy(() => import("./pages/Auth/Signin"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const ConfirmEmail = lazy(() => import("./pages/Auth/Confirm-Email"));
const Home = lazy(() => import("./pages/home/Home"));
const DiseaseDetection = lazy(() =>
  import("./pages/diseaseDetection/DiseaseDetection")
);

import Loading from "./components/loading/Loading";
import NavigationScroll from "./components/NavigationScroll";
import NotFound from "./pages/NotFound";
import LoadingPage from "./components/loading/LoadingPage";

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <NavigationScroll />
        <Loading />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/auth/reset-password/:token"
              element={<ResetPassword />}
            />
          </Route>
          <Route path="/confirm-email/:token/" element={<ConfirmEmail />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
