import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/index"
import Database from "./pages/database-viewer/index"
import Grades from "./pages/grades/index"
import Search from "./pages/search/index"
import Notifications from "./pages/notifications/index"
import Analytics from "./pages/analytics/index"
import Attendance from "./pages/attendance/index"
import Login from "./pages/login/index"
import ErrPageNotFound from "./pages/404/errPageNotFound";
import RequireAuth from "./features/auth/RequireAuth";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Public path - IGNORE layout - research */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>

          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/userlist" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/database" element={<Database />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/search" element={<Search />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/attendance" element={<Attendance />} />
          </Route>
        </Route>


        {/* redirect all if it doesn't exist */}
        <Route path="*" element={<ErrPageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;