import Webmanagement from "./components/web/Webmanagement";
function App({ loggedIn }) {
  return (
    <div>
      <Webmanagement loggedIn={loggedIn} />
    </div>
  );
}

export default App;
