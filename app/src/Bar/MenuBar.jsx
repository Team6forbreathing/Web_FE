import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MenuBar = () => {
  const { isLoggedIn, logout } = useAuth(); // 로그인 상태와 logout 함수 가져오기

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/mypage">MyPage</Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>
                Logout
              </Link>{" "}
              {/* 로그아웃 처리 */}
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MenuBar;
