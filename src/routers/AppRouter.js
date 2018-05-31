import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import AboutPage from "../components/AboutPage";
import BlogPage from "../components/BlogPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import WhyPage from "../components/WhyPage";

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
			<div>
				<Header />
				<div>
				<Switch>
					<Route path="/" component={HomePage} exact/>
					<Route path="/about" component={AboutPage}/>
					<Route path="/blog" component={BlogPage}/>
					<Route path="/contact" component={ContactPage}/>
					<Route path="/why" component={WhyPage}/>
					<Route component={NotFoundPage} />
				</Switch>
				</div>
				<Footer />
			</div>
	</Router>
);

export default AppRouter;