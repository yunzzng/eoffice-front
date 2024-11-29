import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/login/Signup';
import Login from './pages/login/Login';
import Profile from './pages/login/Profile';
import AddMeeting from './pages/meeting/AddMeeting';
import CreateMinutes from './pages/meeting/CreateMinutes';
import EditMeeting from './pages/meeting/EditMeeting';
import MeetingList from './pages/meeting/MeetingList';
// import MinutesList from './pages/meeting/MinutesList';
import ReserrveMeeting from './pages/meeting/ReserveMeeting';
import Splash from './components/splash/Splash';
import Home from './pages/login/Home';
import ErrorPage from './components/ErrorPage';
import { SidebarProvider } from './context/SidebarContext';

export default function RootApp() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addmeeting" element={<AddMeeting />} />
          <Route path="/createminutes" element={<CreateMinutes />} />
          <Route path="/editmeeting" element={<EditMeeting />} />
          <Route path="/meetinglist" element={<MeetingList />} />
          {/* <Route path="/minuteslist" element={<MinutesList />} /> */}
          <Route path="/reservemeeting" element={<ReserrveMeeting />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}
