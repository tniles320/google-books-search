import React from "react";
import TitleContainer from "../../components/TitleContainer";
import HomeContainer from "../../components/HomeContainer";

function Home() {
  const handleSearchButton = () => {};

  const handleSavedButton = () => {};

  return (
    <div>
      <TitleContainer />
      <HomeContainer
        handleSearchButton={handleSearchButton}
        handleSavedButton={handleSavedButton}
      />
    </div>
  );
}

export default Home;
