import { Route, Routes } from "react-router-dom";
import Bag from "../Components/Bag";
import Login from "../Components/Login";
import Wishlist from "../Components/Wishlist";
import WomenShop from "../Components/WomenShopping/WomenShop";
import Kids from "./Kids";
import Men from "./Men";
import PrivateRoute from "./PrivateRoute";
import SingleWomenItem from "./SingleWomenItem";
import Women from "./Women";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/bag" element={<PrivateRoute><Bag /></PrivateRoute>} />
      <Route path="/womenshop" element={<WomenShop/>} />
      <Route path="/womenshop/:id" element={<SingleWomenItem/>} />
    </Routes>
  );
}

export default AllRoutes;
