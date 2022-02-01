import React from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
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
      {location.pathname === "/home" ? <h1>Im in My {location.pathname.replace("/","")}</h1> : ""}
    </div>
  );
}

export default Home;
