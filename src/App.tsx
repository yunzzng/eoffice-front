import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Signup = React.lazy(() => import('./pages/login/Signup'));
const Login = React.lazy(() => import('./pages/login/Login'));
const Profile = React.lazy(() => import('./pages/login/Profile'));
const AddMeeting = React.lazy(() => import('./pages/meeting/AddMeeting'));
const CreateMinutes = React.lazy(() => import('./pages/meeting/CreateMinutes'));
const EditMeeting = React.lazy(() => import('./pages/meeting/EditMeeting'));
const MeetingList = React.lazy(() => import('./pages/meeting/MeetingList'));
const MinutesList = React.lazy(() => import('./pages/meeting/MinutesList'));
const ReserveMeeting = React.lazy(() => import('./pages/meeting/ReserveMeeting'));
const Splash = React.lazy(() => import('./components/splash/Splash'));
const Home = React.lazy(() => import('./pages/login/Home'));
const ErrorPage = React.lazy(() => import('./components/ErrorPage'));
const OauthLoading = React.lazy(() => import('./pages/login/OauthLoading'));
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
          <Route path="/editmeeting" element={<MeetingList />} />
          <Route path="/meetinglist" element={<MeetingList />} />
          <Route path='/editmeeting/:id' element={<EditMeeting/>} />
          <Route path="/minuteslist" element={<MinutesList />} />
          <Route path="/reservemeeting" element={<ReserveMeeting />} />
          <Route path="/reservemeeting/:id" element={<ReserveMeeting />} />
          <Route path="/oauthloading" element={<OauthLoading />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}
