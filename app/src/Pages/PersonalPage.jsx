import React from "react";
import DashboardComponent from "../Components/Home/DashboardComponent.jsx";
import MenuBar from "../Bar/MenuBar.jsx";
import UserInfoComponent from "../Components/Home/UserInfoComponent.jsx";
import AnaylsisResultComponenet from "../Components/Home/AnaylsisResultComponenet";

const PersonalPage = () => {
  return (
    <div>
      <MenuBar />
      <UserInfoComponent />
      <DashboardComponent />
      <AnaylsisResultComponenet />
    </div>
  );
};

export default PersonalPage;
