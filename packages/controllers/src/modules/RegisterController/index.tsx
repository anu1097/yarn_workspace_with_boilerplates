import * as React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import {
	RegisterMutationVariables
} from '../../operation-result-types'

interface Props {
	render: (
		data: { submit: (values: RegisterMutationVariables) => Promise<null> }
	) => JSX.Element | null;
}

export const RegisterController: React.FC<Props> = (props: Props) => {
	const [register, {data}] = useMutation(REGISTER_MUTATION)

	const submit = async (values: RegisterMutationVariables) => {
		console.log({ values });
		console.log({data});
		const response = await register({variables: {email: values.email, password: values.password}});
		console.log({response});
		return null;
	}

	return props.render({ submit });
};

const REGISTER_MUTATION = gql`
	mutation RegisterMutation ($email: String!, $password: String!) {
		register(email: $email, password: $password){
			path,
			message
		}
	}
`