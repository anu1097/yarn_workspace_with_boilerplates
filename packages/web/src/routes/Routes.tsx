import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Routes: React.FC<{}> = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/register" render={() => <div>Register</div>} />
			</Switch>
		</BrowserRouter>
	);
};
