import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MBTITest from "./MBTITest";
import Signup from "./Signup";
import Login from "./Login";
import Main from "./Main";
import WritingForm from './WritingForm';
import MyPage from './MyPage';  // MyPage 컴포넌트 import 추가

const App = () => {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<MBTITest />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/write" element={<WritingForm />} />
          <Route path="/planner" element={<WritingForm />} />  {/* /write를 /planner로 변경 */}
          <Route path="/mypage" element={<MyPage />} />  {/* MyPage 라우트 추가 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;