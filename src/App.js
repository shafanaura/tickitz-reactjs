import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import SignUp from "./pages/register/SignUp";
import SignIn from "./pages/register/SignIn";
import ForgotPassword from "./pages/register/ForgotPassword";
import MovieDetail from "./pages/movie-detail/MovieDetail";
import OrderPage from "./pages/order-page/OrderPage";
import PaymentPage from "./pages/payment-page/PaymentPage";
import TicketResult from "./pages/ticket-result-page/TicketResult";
import ProfilePage from "./pages/profile-page/ProfilePage";
import AdminPage from "./pages/admin-page/AdminPage";
import AdminPanel from "./pages/admin-panel/AdminPanel";
import Error from "./pages/Error";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import persistedStore from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Test from "./components/order/Test";

export default class App extends Component {
	render() {
		const { store, persistor } = persistedStore();
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<BrowserRouter>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/sign-up" component={SignUp} />
							<Route path="/login" component={SignIn} />
							<Route path="/forgot-password" component={ForgotPassword} />
							<Route path="/movie-detail/:id" component={MovieDetail} />
							<Route path="/order-page" component={OrderPage} />
							<Route path="/payment" component={PaymentPage} />
							<Route path="/ticket-result" component={TicketResult} />
							<Route path="/profile-page" component={ProfilePage} />
							<Route path="/admin-page" component={AdminPage} />
							<Route path="/test">
								<Test />
							</Route>
							<PrivateRoute path="/admin-panel" privateComponent={AdminPanel} />
							<Route path="*" component={Error} />
						</Switch>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		);
	}
}
