import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layouts
import { RootLayout } from "./layouts/RootLayout";

//pages
import { Home } from "./pages/Home";
import { Bio } from "./pages/Bio";
import { Gallery } from "./pages/Gallery";
import { Booking } from "./pages/Booking";
import { NotFound } from "./pages/NotFound";

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="Bio" element={<Bio />} />

      <Route path="Gallery" element={<Gallery />} />

      <Route path="Booking" element={<Booking />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
