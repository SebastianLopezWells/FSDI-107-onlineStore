import "./App.css";
import NavBar from "./component/navBar";
import Footer from "./component/footer";
import Catalog from "./component/catalog";
import ShoppingList from "./component/shoppingList";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Catalog></Catalog>
      <ShoppingList></ShoppingList>
      <Footer></Footer>
    </div>
  );
}

export default App;
