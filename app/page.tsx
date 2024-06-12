import React from "react";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar"
import Home from "./components/home/home"
import Footer from './components/footer/footer'
import Loading from './components/loading/loading'
export default function Page() {
  return (
    <div className="flex items-center justify-center h-2/4">
      <Loading/>
      </div>
  );
}
