import React from "react";
import Card from "@UI/card";
import Loader from "./components/loader";
import { useEffect, useState } from "react";


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products: ", error));
  }, []);

  return (
    <div className="shadow-lg">
      <h1 className="container mx-auto text-[45px] text-purple-600 text-center">
        Store
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-evenly gap-8 container mx-auto mt-5">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
