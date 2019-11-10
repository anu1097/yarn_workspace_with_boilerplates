import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RegisterContainer } from "../modules/register/RegisterContainer";

export const Routes: React.FC<{}> = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" render={() => <div>Home Page</div>} />
				<Route exact={true} path="/register" component={RegisterContainer} />
				<Route exact={true} path="/login" render={() => <div>Login Page</div>} />
				<Route exact={true} path="/forgotPassword" render={() => <div>Forgot Password</div>} />
			</Switch>
		</BrowserRouter>
	);
};
