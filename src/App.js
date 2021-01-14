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
import Error from "./pages/Error";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/sign-in" component={SignIn} />
					<Route path="/forgot-password" component={ForgotPassword} />
					<Route path="/movie-detail/:id" component={MovieDetail} />
					<Route path="/order-page" component={OrderPage} />
					<Route path="/payment" component={PaymentPage} />
					<Route path="/ticket-result" component={TicketResult} />
					<Route path="/profile-page" component={ProfilePage} />
					<Route path="/admin-page" component={AdminPage} />
					<Route path="*" component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}
