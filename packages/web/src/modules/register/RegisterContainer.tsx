import * as React from "react";
// import { Register } from "./view/Register";
// import { ValidationSchemaExample } from "./view/ValidationSchemaExample";
// import { Register } from "./view/Register";
import { RegisterView } from "./view/RegisterView";

export const RegisterContainer: React.FC<{}> = () => {
	const dummySubmit = async (values: any) => {
		// tslint:disable-next-line: no-console
		console.log(values);
		return null;
	};
	return (
		<RegisterView submit={dummySubmit}/>
	);
};
