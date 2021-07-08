import React from "react";
import ProductItems from "./ProductItems";

const products = [
  {
    id: "_1",
    image:
      "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1630&q=80",
    brand: "Nova",
    product_name: "Natural Perfumes",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cupiditate debitis dolore ducimus facilis in inventore ipsam mollitia nesciunt, praesentium provident quia ratione repellendus sapiente, sit tempora totam, velit?",
    price: "$122",
    company_name: "Fashion Nova",
    company_website: "www.fashionnova.com",
  },
  {
    id: "_2",
    image:
      "https://images.unsplash.com/photo-1556301590-319c5b2ac83d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    brand: "Levis",
    product_name: "Jeans",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cupiditate debitis dolore ducimus facilis in inventore ipsam mollitia nesciunt, praesentium provident quia ratione repellendus sapiente, sit tempora totam, velit?",
    price: "$12",
    company_name: "Levis Jeans",
    company_website: "www.levisjeans.com",
  },
  {
    id: "_3",
    image:
      "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    brand: "Celvin Kelin",
    product_name: "Blue Jeans",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cupiditate debitis dolore ducimus facilis in inventore ipsam mollitia nesciunt, praesentium provident quia ratione repellendus sapiente, sit tempora totam, velit?",
    price: "$22",
    company_name: "Celvin Kelin",
    company_website: "www.celvinkelin.com",
  },
  {
    id: "_4",
    image:
      "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    brand: "Ray-Ban",
    product_name: "Sun Glasses",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cupiditate debitis dolore ducimus facilis in inventore ipsam mollitia nesciunt, praesentium provident quia ratione repellendus sapiente, sit tempora totam, velit?",
    price: "$10",
    company_name: "Ray-Ban",
    company_website: "www.rayban.com",
  },
  {
    id: "_1",
    image:
      "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1630&q=80",
    brand: "Nova",
    product_name: "Natural Perfumes",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cupiditate debitis dolore ducimus facilis in inventore ipsam mollitia nesciunt, praesentium provident quia ratione repellendus sapiente, sit tempora totam, velit?",
    price: "$122",
    company_name: "Fashion Nova",
    company_website: "www.fashionnova.com",
  },
  {
    id: "_2",
    image:
      "https://images.unsplash.com/photo-1556301590-319c5b2ac83d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    brand: "Levis",
    product_name: "Jeans",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cupiditate debitis dolore ducimus facilis in inventore ipsam mollitia nesciunt, praesentium provident quia ratione repellendus sapiente, sit tempora totam, velit?",
    price: "$12",
    company_name: "Levis Jeans",
    company_website: "www.levisjeans.com",
  },
  {
    id: "_3",
    image:
      "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    brand: "Celvin Kelin",
    product_name: "Blue Jeans",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cupiditate debitis dolore ducimus facilis in inventore ipsam mollitia nesciunt, praesentium provident quia ratione repellendus sapiente, sit tempora totam, velit?",
    price: "$22",
    company_name: "Celvin Kelin",
    company_website: "www.celvinkelin.com",
  },
  {
    id: "_4",
    image:
      "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    brand: "Ray-Ban",
    product_name: "Sun Glasses",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cupiditate debitis dolore ducimus facilis in inventore ipsam mollitia nesciunt, praesentium provident quia ratione repellendus sapiente, sit tempora totam, velit?",
    price: "$10",
    company_name: "Ray-Ban",
    company_website: "www.rayban.com",
  },
];
const Products = () => {
  //   const [data, setData] = useState(products);
  const data = products;
  return (
    <>
      <div className="w-full">
        <div className="px-10 lg:px-20 py-20 bg-light_white font-rubik">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="title mb-4 lg:mb-0">
              <div className="text-2xl font-bold mx-auto text-primary font-header ">
                Search from millions
              </div>
              <div className="tracking-wider text-lg">
                Best place to find products you always dreamed online.
              </div>
            </div>
            <div className="text-end">
              <form className="flex flex-col sm:flex-row w-full max-w-sm sm:space-x-3">
                <div className="relative mb-2 sm:mb-0">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Search item"
                  />
                </div>
                <button className="primary-button cursor-pointer hover:text-primary tracking-wider text-lg" type="button">
                  Search
                </button>
              </form>
            </div>
          </div>
          {/*Products*/}
          <ProductItems data={data} />
        </div>
      </div>
    </>
  );
};

export default Products;
