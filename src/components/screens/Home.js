import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});
  setSearchParams({ next: "home" });

  const handleNextpage = () => {
    navigate({ pathname: "/request" });
  };
  console.log(searchParams);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => handleNextpage()}>To Request</button>
    </div>
  );
}

export default Home;
