import React from "react";
import PricePanel from "./components/PricePanel";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  let data = [
    {
      title: "FREE",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      domain: "Free Subdomain",
      project: "text-muted",
      projectIcon: "bi bi-x",
      phone: "text-muted",
      phoneIcon: "bi bi-x",
      subDomain: "text-muted",
      subDomainIcon: "bi bi-x",
      monthly: "text-muted",
      monthlyIcon: "bi bi-x",
    },
    {
      title: "PLUS",
      price: "$9",
      user: "5 Users",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: "",
      projectIcon: "bi bi-check",
      phone: "",
      phoneIcon: "bi bi-check",
      subDomain: "",
      subDomainIcon: "bi bi-check",
      monthly: "text-muted",
      monthlyIcon: "bi bi-x",
    },
    {
      title: "PRO",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      domain: "Unlimited Free Subdomain",
      project: "",
      projectIcon: "bi bi-check",
      phone: "",
      phoneIcon: "bi bi-check",
      subDomain: "",
      subDomainIcon: "bi bi-check",
      monthly: "",
      monthlyIcon: "bi bi-check",
    },
  ];

  return (
    <div>
      <PricePanel data={data} />
    </div>
  );
};

export default App;
