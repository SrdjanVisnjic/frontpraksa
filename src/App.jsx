import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import CardPostList from "./components/CardPostList";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import NewPost from "./components/NewPost";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test name={'pera'} lastname={'peric'} />} />
        <Route path="/about" element={<CardPostList />} />
        <Route path="/login" element={<SignInForm/>} />
        <Route path="/register" element={<SignUpForm/>}/>
        <Route path="/newpost" element={<NewPost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
