import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import AdminChart from "../components/AdminChart";
const RengerDashboard = () => {
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(userInfo);
    if (userInfo?.user?.role !== "ranger") {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className=" py-5 d-flex gap-3 justify-content-between">
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Total Visitor </h1>
          <h2>200+</h2>
        </div>
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Ticket sell </h1>
          <h2>200+</h2>
        </div>
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Total price </h1>
          <h2>200+</h2>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-around py-5">
        <AdminChart />
      </div>
    </>
  );
};

export default RengerDashboard;