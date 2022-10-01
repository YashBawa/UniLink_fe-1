import { useRoutes } from "raviger";
import Home from "./Components/Home";
import HomePage from "./Components/HomePage";
import Hackathon from "./Components/Hackathon";
import Chatbot from "./Components/Chatbot";
import Notification from "./Components/Notification";
import Profile from "./Components/Profile";
import NotFound from "./Components/NotFound";
import Connect from "./Components/Connect";
import Blogs from "./Components/Blogs";
import Contest from "./Components/Contest";
import Internship from "./Components/Internship";

const route = {
  "/": () => <Home />,
  "/home": () => <HomePage />,
  "/connect": () => <Connect />,
  "/blogs": () => <Blogs />,
  "/contest": () => <Contest />,
  "/internship": () => <Internship />,
  "/hackathon": () => <Hackathon />,
  "/chatbot": () => <Chatbot />,
  "/notification": () => <Notification />,
  "/profile": () => <Profile />,
  "*": () => <NotFound />,
};

export default function AppRouter() {
  const routes = useRoutes(route);
  return <div>{routes}</div>;
}
