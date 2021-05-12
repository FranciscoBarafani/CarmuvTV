import "./App.less";
import MainLayout from "./layouts/MainLayout";
import SpatialNavigation from 'react-js-spatial-navigation'

function App() {
  return (
    <div className="App">
      <SpatialNavigation>
      <MainLayout />
      </SpatialNavigation>
    </div>
  );
}

export default App;
