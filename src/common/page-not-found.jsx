import { Link } from "react-router-dom";
// import FrontPage from "./common/FrontPage";

export default function PageNotFound() {
  return (
    <div>
      <div
        className="bg-fixed bg-no-repeat bg-center h-screen bg-cover font-text relative"
        id="page-not-found"
      >
        <main className="bg-black bg-opacity-80 w-full h-full flex flex-col justify-center items-center absolute top-0 space-y-5 px-6 pt-10">
          <div className="text-white text-5xl md:text-6xl font-header lg:text-8xl text-center">
            404
          </div>
          <div className="text-white text-4xl md:text-5xl font-header lg:text-7xl text-center">
            Nothing found
          </div>

          <div>
            <div className="button-animation">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="animation-text px-5 py-3"
              >
                Go back to homepage
              </Link>
              <div className="animation-bg"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
