import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import NewPost from "./components/NewPost";
import FriendRequestList from "./components/FriendRequestList";
import SearchForm from "./components/SearchForm";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Profile from "./pages/Profile";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/friendrequests" element={<FriendRequestList />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/search" element={<SearchForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
