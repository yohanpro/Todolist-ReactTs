import React, { useState } from "react";
import Header from "src/components/header";
import AddTask from "src/components/AddTask";

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="home">
      <Header isLogin={isLogin} />
      <main>
        <AddTask />
      </main>
    </div>
  );
};

export default Home;
