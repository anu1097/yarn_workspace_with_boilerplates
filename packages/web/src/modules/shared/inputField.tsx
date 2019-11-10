import { Form, Input } from "antd";
import { FieldProps } from "formik";
import * as React from "react";

interface Props {
	prefix: React.ReactNode;
}

const FormItem = Form.Item;

export const InputField: React.SFC<FieldProps<any> & Props> = ({
	field,
	form,
	...props
}) => {
	const { touched, errors } = form;
	const errorMsg = touched[field.name] && errors[field.name];
	return (
		<FormItem
			help={errorMsg}
			validateStatus={errorMsg ? "error" : undefined}
		>
			<Input
				{...field}
				{...props}
			/>
		</FormItem>
	);
};
