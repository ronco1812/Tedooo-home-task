import React from "react";
import Feed from "../../components/Feed/Feed";
import PageHeader from "../../components/PageHeader/PageHeader";

const HomePage: React.FC = () => {
  return (
    <div>
      <PageHeader />
      <Feed />
    </div>
  );
};

export default HomePage;
