import { userValidationSchema } from "@model/common";
import { Button, Form, Icon, Input } from "antd";
import { Formik, FormikErrors } from "formik";
import * as React from "react";
import "./register.css";

const FormItem = Form.Item;

interface FormValues {
	email: string;
	password: string;
}

interface Props {
	submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export const RegisterView: React.FC<Props> = ({submit}) => {
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
				const { values, errors, handleSubmit, handleChange, touched, handleBlur } = props;
				return (

					<form onSubmit={handleSubmit} className="registerPage">
						<h1 className="formItemCenter">Register Page</h1>
						<div>
							<FormItem
								help={touched.email && errors.email ? errors.email : ""}
								validateStatus={touched.email && errors.email ? "error" : undefined}
							>
								<Input
									name="email"
									prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
									placeholder="Email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormItem>
							<FormItem
								help={touched.password && errors.password ? errors.password : ""}
								// tslint:disable-next-line:jsx-no-multiline-js
								validateStatus={
									touched.password && errors.password ? "error" : undefined
								}
							>
								<Input
									name="password"
									prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
									type="password"
									placeholder="Password"
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormItem>
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
					</form>
				);
			}}
		</Formik >
	);
};
