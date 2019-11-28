import * as React from "react";
import { RegisterView } from "./view/RegisterView";
import { RegisterController } from "@model/controllers";

export const RegisterContainer: React.FC<{}> = () => {
	return (
		<RegisterController 
			render = {(props) => <RegisterView submit={props.submit}/>}
		/>
	);
};
