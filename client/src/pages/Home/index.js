import React from "react";
import HomeContainer from "../../components/HomeContainer";

function Home() {
  const handleSearchButton = () => {};

  const handleSavedButton = () => {};

  return (
    <div>
      <HomeContainer
        handleSearchButton={handleSearchButton}
        handleSavedButton={handleSavedButton}
      />
    </div>
  );
}

export default Home;
