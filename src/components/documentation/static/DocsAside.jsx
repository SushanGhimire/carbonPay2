import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DocsAside() {
  const [width, setWidth] = useState(window.innerWidth);
  const asideLists = [
    {
      name: "Home",
      logo:
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      path: "/docs",
    },
    {
      name: "plugins",
      logo:
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      path: "/docs/plugins",
    },
  ];
  // if user is using screen width of laptop and changes to lower than 1023px width, call the function
  // if user is using screen width of ipad or mobile and changes to higher than 1024px width, call the function
  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1023 && width < 1024) {
      setWidth(innerWidth);
    } else if (innerWidth < 1024 && width > 1023) {
      setWidth(innerWidth);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });
  return (
    <>
      {/* for laptops */}
      {width > 1023 && (
        <div className="bg-gray-50 w-64 border overflow-auto min-h-screen">
          {/* content part  */}
          <div className="flex flex-col  mt-5">
            {asideLists.map((list, index) => {
              return (
                <Link
                  to={list.path}
                  key={index}
                  className="text-gray-600 flex pl-8 pr-2 space-x-4 py-2"
                >
                  <div>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={list.logo}
                      />
                    </svg>
                  </div>
                  <span> {list.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default DocsAside;
