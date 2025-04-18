import Greeting from "./component/Greet/Greeting";
import UserStatus from "./component/conditional rendering/UserStatus";
import Weather from "./component/conditional rendering/Weather";
import ProductInfo from "./component/expression/ProductInfo";
import ProductList from "./component/map/ProductList";
import UserList from "./component/map/UserList";
import Card from "./component/props/Card";
import Person from "./component/props/Person";
import Product from "./component/props/Product";

function App() {

  return (
    <>
      {/* <Greeting /> */}
      {/* <ProductInfo /> */}
      {/* <UserList /> */}
      {/* <ProductList /> */}
      {/* <Person name='Abhi' age={24} /> */}
      {/* <Product name='Toshiba' price={1200} /> */}
      {/* <Card>
        <h1>My Card</h1>
        <p>This is some content</p>
      </Card> */}
      {/* <Weather temp={3} /> */}
      {/* <UserStatus loggedIn={true} isAdmin={false} /> */}
      <Greeting timeOfDay="morning" />
    </>
  )
}

export default App
