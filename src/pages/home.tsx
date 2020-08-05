import React, { useState } from "react";
import Header from "src/components/header";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="login-container">
      <Header isLogin={isLogin} />
      <main></main>
    </div>
  );
};

export default Home;
