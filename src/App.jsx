import FeaturedTitle from "./components/FeaturedTitle";

function App() {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="xl:px-0 px-2">
        <FeaturedTitle className="py-3" text="Featured Products" />
        <div className="sm:flex justify-between items-center sm:space-x-5 space-x-0 sm:space-y-0 space-y-3">
          <div className="sm:w-2/4">
            <div className="aspect-w-16 aspect-h-9">
              <img src="./images/banner_left.png" alt="" />
            </div>
          </div>
          <div className="sm:w-2/4">
            <div className="aspect-w-16 aspect-h-9">
              <img src="./images/banner_right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
