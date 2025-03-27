import React from "react";
import DashboardComponent from "../Components/Home/DashboardComponent.jsx";
import MenuBar from "../Bar/MenuBar.jsx";
import UserInfoComponent from "../Components/Home/UserInfoComponent.jsx";
import AnalysisResultComponent from "../Components/Home/AnaylsisResultComponenet.jsx";

const HomePage = () => {
  return (
    <div>
      <MenuBar />
      <h1> 로그인하고 당신의 수면 상태를 확인해보세요</h1>
      <p>Nice to meet you</p>
    </div>
  );
};

export default HomePage;
