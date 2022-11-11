import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"
import Homepage from "./pages/homepage/Index"
import Dashboard from "./pages/Portal/dashboard/index"
import Database from "./pages/Portal/database-viewer/index"
import Grades from "./pages/Portal/grades/index"
import Search from "./pages/Portal/search/index"
import Notifications from "./pages/Portal/notifications/index"
import Analytics from "./pages/Portal/analytics/index"
import Attendance from "./pages/Portal/attendance/index"
import Login from "./pages/Portal/login/index"
import ErrPageNotFound from "./pages/404/errPageNotFound";
import RequireAuth from "./features/auth/RequireAuth";
import { useSelector } from 'react-redux'
import Schedule from "./pages/homepage/students/schedule/Index";
import ContactUs from "./pages/homepage/contact-us/Index";
import HomeScreen from "./pages/homepage/Index/components/HomeScreen/Index";
import AboutUs from "./pages/homepage/about-us/Index";
import ParentsCarers from "./pages/homepage/parents-carers/Index";
import NewsAndEvents from "./pages/homepage/news-events/Index";
import Gallery from "./pages/homepage/news-events/gallery/Index";
import GalleryIndex from "./pages/homepage/news-events/gallery/galleyPage/Gallery"
import Competition from "./pages/homepage/news-events/Competition/Index"
import PhotoAlbum from "pages/homepage/news-events/gallery/components/PhotoAlbumb/PhotoAlbum";
import Students from "./pages/homepage/students/StudyMaterial/Index"
import Material from "./pages/homepage/students/StudyMaterial/material/Index"

function App() {
  const loggedInState = useSelector((state) => state.auth.isLoggedIn)

  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/" element={<Homepage />}>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="competition" element={<NewsAndEvents />} />
          <Route path="newsandevents" element={<NewsAndEvents />} />
          <Route path="competitions" element={<Competition />} />
          <Route path="gallery" element={<Gallery />} >
            <Route path="" element={< GalleryIndex />} />
            <Route path=":id" element={< PhotoAlbum />} />
          </Route>
          <Route path="parents-carers" element={<ParentsCarers />} />
          <Route path="students">
            <Route path="schedule" element={<Schedule />} />
            <Route path="studymaterial" element={<Students />} />
            <Route path="studymaterial/:grade/:subject" element={<Material />} />
          </Route>
          <Route path="schedule" element={<Schedule />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        {/* Public path - IGNORE layout - research */}
        <Route path="/login" element={!loggedInState && <Login />} />
        {/* School Portal path */}
        <Route path="/portal" element={<Layout />}>
          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="" element={<Dashboard />} />
            <Route path="userlist" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="database" element={<Database />} />
            <Route path="grades" element={<Grades />} />
            <Route path="search" element={<Search />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="attendance" element={<Attendance />} />
          </Route>
        </Route>
        {/* redirect all if it doesn't exist */}
        <Route path="*" element={<ErrPageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;