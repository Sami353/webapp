import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductView from "./pages/productView/ProductView";
import UserView from "./pages/userView/UserView";
import GymList from "./pages/gym/GymList";
import GymView from "./pages/gym/GymView";
import GymEdit from "./pages/gym/GymEdit";
import NewGym from "./pages/gym/NewGym";
import Order from "./pages/order/Order";
import SubscriptionList from "./pages/gym/SubscriptionList";
import SubscriptionEdit from "./pages/gym/SubscriptionEdit";
import SubscriptionView from "./pages/gym/SubscriptionView";
import NewSubscription from "./pages/gym/NewSubscription";
import OrderView from "./pages/order/OrderView";
import OrderEdit from "./pages/order/OrderEdit";
import NewOrder from "./pages/order/NewOrder";
import LogIn from "./pages/logIn/LogIn";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/webapp">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/userView/:userId">
            <UserView />
          </Route>
          <Route path="/usersEdit/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/productView/:productId">
            <ProductView />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/orders">
            <Order />
          </Route>
          <Route path="/orderView/:orderId">
            <OrderView />
          </Route>
          <Route path="/orderEdit/:gymId">
            <OrderEdit />
          </Route>
          <Route path="/neworder">
            <NewOrder />
          </Route>
          <Route path="/gyms">
            <GymList />
          </Route>
          <Route path="/gymView/:gymId">
            <GymView />
          </Route>
          <Route path="/gymEdit/:gymId">
            <GymEdit />
          </Route>
          <Route path="/newgym">
            <NewGym />
          </Route>
          <Route path="/subscriptions">
            <SubscriptionList />
          </Route>
          <Route path="/subscriptionEdit/:gymId">
            <SubscriptionEdit />
          </Route>
          <Route path="/subscriptionView/:gymId">
            <SubscriptionView />
          </Route>
          <Route path="/newsubscription">
            <NewSubscription />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
