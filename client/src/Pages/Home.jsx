import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Filter from "../components/AdvertisementWindow/Filter";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setRole } from "../store/roleSlice";
import serverUrl from "../config";
import InsuranceList from "../components/ProductList/InsuranceList";
import InsuranceCardData from "../data/insuranceCardData";
import InvestmentCardData from "../data/investmentCardData";
import AchievementSection from "../components/AchievementSection/AchievementSection";
import achievementInfo from "../data/achievementInfo";
import Partners from "../components/Home/Partners";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getRole = async () => {
      try {
        const response = await axios.post(
          `${serverUrl}/isAdmin`,
          {},
          {
            withCredentials: true,
          },
        );
        // console.log(response.data);
        dispatch(setRole(response.data));
      } catch (error) {
        console.log(error.message);
      }
    };
    getRole();
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get(`${serverUrl}/product/getAll`);
      // console.log(response.data)
      setProducts(response.data);
    };
    getAllProducts();
  }, []);

  const [category, setCategory] = useState("All Products");
  const [placeholder, setPlaceholder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    switch (category) {
      case "all":
        setPlaceholder("get all products! Hit search");
        break;
      case "price":
        setPlaceholder("Enter ascending or descending...");
        break;
      case "category":
        setPlaceholder("Enter a category...");
        break;
      case "max":
        setPlaceholder("Enter a max price...");
        break;
      case "shop":
        setPlaceholder("Enter a shop name...");
        break;
      case "name":
        setPlaceholder("Enter a product name...");
        break;
      default:
        setPlaceholder("Enter a filter option...");
        break;
    }
  }, [category]);

  const performSearch = async () => {
    switch (category) {
      case "all":
        {
          let response = await axios.get(`${serverUrl}/product/getAll`);
          setProducts(response.data);
        }
        break;
      case "price":
        {
          if (searchTerm === "ascending") {
            let response = await axios.get(
              `${serverUrl}/product/getProductByAsc`,
            );
            setProducts(response.data);
          } else {
            let response = await axios.get(
              `${serverUrl}/product/getProductByDsc`,
            );
            setProducts(response.data);
          }
        }
        break;
      case "category":
        {
          let response = await axios.get(
            `${serverUrl}/product/getByCategory/${searchTerm}`,
          );
          setProducts(response.data);
        }
        break;
      case "max":
        {
          const response = await axios.get(
            `${serverUrl}/product/getProduct/${searchTerm}`,
          );
          setProducts(response.data);
          console.log(products);
        }
        break;
      case "shop":
        {
          const response = await axios.get(
            `${serverUrl}/product/getByShop/${searchTerm}`,
          );
          setProducts(response.data);
        }
        break;
      case "name":
        {
          const response = await axios.get(
            `${serverUrl}/product/getByName/${searchTerm}`,
          );
          setProducts(response.data);
        }
        break;
      default:
        alert("Input values correctly...");
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center bg-gray-50">
        <div className="w-full sm:w-4/5 p-10 flex flex-col">
          <Filter />
        </div>
        <div className="flex flex-col w-4/5 mt-10">
          <InsuranceList title={"Insurance"} CardData={InsuranceCardData} />
          <InsuranceList title={"Investment"} CardData={InvestmentCardData} />
        </div>
        <AchievementSection achievementInfo={achievementInfo} />
        <Partners />
      </div>
    </>
  );
}

export default Home;
