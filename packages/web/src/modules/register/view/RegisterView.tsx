import { userValidationSchema } from "@model/common";
import { Button, Form, Icon } from "antd";
import { Field, Form as FormikForm, Formik, FormikErrors } from "formik";
import * as React from "react";
import { InputField } from "../../shared/inputField";
import "./register.css";

const FormItem = Form.Item;

interface FormValues {
	email: string;
	password: string;
}

interface Props {
	submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export const RegisterView: React.FC<Props> = ({ submit }) => {
	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={userValidationSchema}
			onSubmit={submit}
		>
			{(props) => {
				return (
					<FormikForm className="registerPage">
						<h1 className="formItemCenter">Register Page</h1>
						<div>
							<Field
								name="email"
								prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
								component={InputField}
								placeholder="Email"
							/>
							<Field
								name="password"
								prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
								type="password"
								placeholder="Password"
								component={InputField}
							/>
							<FormItem>
								<a className="formItemRight" href="/forgotPassword">
									Forgot password
								</a>
							</FormItem>
							<FormItem>
								<Button
									type="primary"
									htmlType="submit"
									className="login-form-button"
								>
									Register
								</Button>
							</FormItem>
							<FormItem className="formItemRight">
								Or <a href="/login">login now!</a>
							</FormItem>
						</div>
					</FormikForm>
				);
			}}
		</Formik >
	);
};
