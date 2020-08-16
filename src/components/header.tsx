import React from "react";

interface headParams {
  isLogin: boolean;
}
const Header = (props: headParams) => {
  const { isLogin } = props;
  return (
    <div className="header">
      <div></div>
      <h3 className="title">My TodoList</h3>
      <h3 className="login">{isLogin ? "로그아웃" : "로그인"}</h3>
    </div>
  );
};

export default Header;
