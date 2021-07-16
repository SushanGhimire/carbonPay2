import React, {useState, useEffect} from "react";
import { baseUrl } from "../../authentication/authorization";
import ProductItems from "./ProductItems";
import { useHistory } from "react-router";

const Products = ({ match }) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [sussessData, setSuccessData] = useState({});
  //Check login
  const [isLoggenIn, setIsLoggedIn] = useState(false)

  //Items
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //Checking Login
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
      login: "",
    },
  });


  useEffect(() => {
    const id = match.params.id;
    if(id){
      const fetchStoreData = async () => {
          fetch(`${baseUrl}/products/${id}`)
            .then(res => res.json())
            .then(
              (result) => {
                setShowModal(true);
                setSuccessData(result);
              },
              (error) => {
                console.log(error)
              }
            )
      };
      fetchStoreData();
    }    
  }, [match.params.id]);

  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async() => {
    await fetch(`${baseUrl}/products/list/`)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.detail === "Unauthorized"){
          setIsLoggedIn(false);
        } else {
          // setIsLoggedIn(true);
          // setIsLoaded(true);
          // setItems(result);
        }
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  const handleErrors = (property, value) => {
    const { errors } = data;
    value = value === undefined ? data[property] : value;
    errors.login = errors.login && "";
    let result;
    if (value.trim() === "") {
      errors[property] = `${property[0].toUpperCase()}${property.slice(
        1,
        property.length
      )} cannot be left empty`;
      result = false;
    } else {
      if (property === "email") {
        if (
          !value.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi
          )
        ) {
          errors.email = "Invalid email";
          result = false;
        } else {
          errors.email = "";
          result = true;
        }
      } else {
        if (value.length < 6) {
          errors.password = "Password must be atleast 6 characters long";
          result = false;
        } else {
          errors.password = "";
          result = true;
        }
      }
    }

    setData({
      ...data,
      errors,
    });
    return result;
  };

  const handleChange = ({ target: { value } }, property) => {
    handleErrors(property, value);
    setData({
      ...data,
      [property]: value,
    });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const url = `${baseUrl}/products/list/`;

    const { email, password, errors } = data;
    const credentials = ["email", "password"];
    let goAhead;
    for (let i = 0; i < credentials.length; i++) {
      const result = handleErrors(credentials[i]);
      if (goAhead !== false) {
        goAhead = result;
      }
    }

    if (goAhead) {
      // submitting the form if all input fields are validated
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      setLoading(true);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((dta) => {
            if(dta.detail === "Unauthorized") {
              errors.login = "Unauthorized";
              setLoading(false);
              setData({
                ...data,
                errors,
              });
            } else {
              setIsLoggedIn(true);
              setIsLoaded(true);
              setItems(dta);
              //history.push('/products');
              //fetchItems();
            }
        });
    }
  };

  const {
    email,
    password,
    errors: { email: emailError, password: passwordError, login: loginError },
  } = data;

  

  const closeModal = () => {
    setShowModal(false);
    history.push(`/products`);
  }

  return (
    <>  
        {isLoggenIn ? (
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
                <ProductItems items={items} error={error} isLoaded={isLoaded} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
      <div className="  w-full h-full grid place-items-center py-16">
        <form
          className="bg-white border border-gray-300 mx-5 max-w-sm w-full authentication-form"
          // autoComplete="off"
          onSubmit={handleLoginSubmit}
        >
          
          <div className="space-y-5 p-5">
            <div className="space-y-1 flex flex-col">
              <label htmlFor="email" className="text-gray-500">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                onChange={(event) => handleChange(event, "email")}
                autoComplete="off"
              />
              {emailError && (
                <div className="error text-red-600">{emailError}</div>
              )}
            </div>
            <div className="space-y-1 flex flex-col">
              <div className="flex">
                <label htmlFor="password" className="text-gray-500">
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                className="border border-gray-300 py-2 px-6 focus:outline-none focus:border-primary"
                onChange={(event) => handleChange(event, "password")}
                autoComplete="off"
              />
              {passwordError && (
                <div className="error text-red-600">{passwordError}</div>
              )}
              {loginError && (
                <div className="error text-red-600">{loginError}</div>
              )}
            </div>

            <div className="button-animation" style={{ display: "block", borderRadius: "0", marginTop: "30px" }}>
              <button className="animation-text text-center px-5 py-3 w-full flex items-center space-x-4">
                <span>Sign In</span>
                {loading && (
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </button>
              <div className="animation-bg"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  
          </>
        )}
        
        {/* Success Modal */}
        {showModal && (
          <>
          <div className="w-full h-screen overflow-hidden fixed inset-0 font-rubik bg-black bg-opacity-40 z-20">
            <div className="w-full h-full relative flex justify-center items-center ">
              <div className="w-full max-w-lg mx-auto bg-white z-20 font-semibold  flex flex-col rounded-md overflow-hidden shadow-md border border-gray-300">
                {/* header  */}
                <div className="bg-gray-200 py-3 flex justify-between px-7 items-center">
                  <span className=" text-lg md:text-xl">Success</span>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded-md text-xs md:text-sm"
                    onClick={closeModal}
                  >
                    close
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex flex-col items-center text-center justify-center">
                      <div className="">
                        <svg id="b76bd6b3-ad77-41ff-b778-1d1d054fe577" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 570 511.67482"><path d="M879.99927,389.83741a.99678.99678,0,0,1-.5708-.1792L602.86963,197.05469a5.01548,5.01548,0,0,0-5.72852.00977L322.57434,389.65626a1.00019,1.00019,0,0,1-1.14868-1.6377l274.567-192.5918a7.02216,7.02216,0,0,1,8.02-.01318l276.55883,192.603a1.00019,1.00019,0,0,1-.57226,1.8208Z" transform="translate(-315 -194.16259)" fill="#3f3d56"/><polygon points="23.264 202.502 285.276 8.319 549.276 216.319 298.776 364.819 162.776 333.819 23.264 202.502" fill="#e6e6e6"/><path d="M489.25553,650.70367H359.81522a6.04737,6.04737,0,1,1,0-12.09473H489.25553a6.04737,6.04737,0,1,1,0,12.09473Z" transform="translate(-315 -194.16259)" fill="#4ad594"/><path d="M406.25553,624.70367H359.81522a6.04737,6.04737,0,1,1,0-12.09473h46.44031a6.04737,6.04737,0,1,1,0,12.09473Z" transform="translate(-315 -194.16259)" fill="#4ad594"/><path d="M603.96016,504.82207a7.56366,7.56366,0,0,1-2.86914-.562L439.5002,437.21123v-209.874a7.00817,7.00817,0,0,1,7-7h310a7.00818,7.00818,0,0,1,7,7v210.0205l-.30371.12989L606.91622,504.22734A7.61624,7.61624,0,0,1,603.96016,504.82207Z" transform="translate(-315 -194.16259)" fill="#fff"/><path d="M603.96016,505.32158a8.07177,8.07177,0,0,1-3.05957-.59863L439.0002,437.54521v-210.208a7.50851,7.50851,0,0,1,7.5-7.5h310a7.50851,7.50851,0,0,1,7.5,7.5V437.68779l-156.8877,66.999A8.10957,8.10957,0,0,1,603.96016,505.32158Zm-162.96-69.1123,160.66309,66.66455a6.1182,6.1182,0,0,0,4.668-.02784l155.669-66.47851V227.33721a5.50653,5.50653,0,0,0-5.5-5.5h-310a5.50653,5.50653,0,0,0-5.5,5.5Z" transform="translate(-315 -194.16259)" fill="#3f3d56"/><path d="M878,387.83741h-.2002L763,436.85743l-157.06982,67.07a5.06614,5.06614,0,0,1-3.88038.02L440,436.71741l-117.62012-48.8-.17968-.08H322a7.00778,7.00778,0,0,0-7,7v304a7.00779,7.00779,0,0,0,7,7H878a7.00779,7.00779,0,0,0,7-7v-304A7.00778,7.00778,0,0,0,878,387.83741Zm5,311a5.002,5.002,0,0,1-5,5H322a5.002,5.002,0,0,1-5-5v-304a5.01106,5.01106,0,0,1,4.81006-5L440,438.87739l161.28027,66.92a7.12081,7.12081,0,0,0,5.43994-.03L763,439.02741l115.2002-49.19a5.01621,5.01621,0,0,1,4.7998,5Z" transform="translate(-315 -194.16259)" fill="#3f3d56"/><path d="M602.345,445.30958a27.49862,27.49862,0,0,1-16.5459-5.4961l-.2959-.22217-62.311-47.70752a27.68337,27.68337,0,1,1,33.67407-43.94921l40.36035,30.94775,95.37793-124.38672a27.68235,27.68235,0,0,1,38.81323-5.12353l-.593.80517.6084-.79346a27.71447,27.71447,0,0,1,5.12353,38.81348L624.36938,434.50586A27.69447,27.69447,0,0,1,602.345,445.30958Z" transform="translate(-315 -194.16259)" fill="#4ad594"/></svg>  
                      </div>
                      <div className="text-lg text-primary mt-4">
                      {sussessData.message}
                      </div>
                      <div className="text-2xl font-semibold text-secondary py-3">
                        ${sussessData.amount_total}
                      </div>
                      <div className="leading-5">
                        An email with your order detail has been sent to your mail address.
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        
          </>
        )}
    </>
  );
};

export default Products;
