import React, { useState } from "react";
import AppointmentList from "./components/AppointmentList";
import CreateAppointment from "./components/CreateAppointment";
import "./index.css";
import "./components/AppointmentList.module.css"

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {

  const [view, setView] = useState("list");
  const handleCreated = () => setView("list");

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      <Header currentView={view} onChangeView={setView} />

      <main style={{ padding: 24, width: "100%", margin: "0 auto", flex: 1 }}>
       {view === "list" 
  ? <AppointmentList onChangeView={setView} /> 
  : <CreateAppointment onCreated={handleCreated} />
}
      </main>
      <Footer />
    </div>
  );
}

export default App;
