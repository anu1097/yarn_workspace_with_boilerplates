import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { client } from "./apollo";
import "./index.css";
import { Routes } from "./routes/Routes";

ReactDOM.render(
	<ApolloProvider client={client}>
		<Routes />
	</ApolloProvider>,
	document.getElementById("root"),
);
