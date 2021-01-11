import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import SignUp from "./pages/register/SignUp";
import SignIn from "./pages/register/SignIn";
import ForgotPassword from "./pages/register/ForgotPassword";
import MovieDetail from "./pages/movie-detail/MovieDetail";
import OrderPage from "./pages/order-page/OrderPage";

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
				</Switch>
			</BrowserRouter>
		);
	}
}
