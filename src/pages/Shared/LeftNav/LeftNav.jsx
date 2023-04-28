import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftInsight from "../LeftInsight/LeftInsight";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      
        <h2>All Categories</h2>
       <div className="ps-4 ">
       {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className=" text-black text-decoration-none">{category.name}</Link>
          </p>
        ))}
       </div>
       <LeftInsight></LeftInsight>
      </div>
  );
};

export default LeftNav;
