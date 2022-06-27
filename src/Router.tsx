import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./Pages/404";
import Event from "./Pages/Event";
import Home from "./Pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
