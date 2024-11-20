import React from "react";
import HomeScreen from "./home/HomeScreen";
import AuthScreen from "./home/AuthScreen";

export default function Home() {
  const user = false;

  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
}
