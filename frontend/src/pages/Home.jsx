import React from "react";
import HomeScreen from "./home/HomeScreen";
import AuthScreen from "./home/AuthScreen";
import { useAuthStore } from "../store/authUser";

export default function Home() {
  const { user } = useAuthStore();

  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
}
