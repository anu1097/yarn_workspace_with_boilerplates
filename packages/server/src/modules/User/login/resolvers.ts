import {userValidationSchema} from "@model/common";
import * as bcrypt from "bcrypt";
import { User } from "../../../entity/User";
import { IResolverMap } from "../../../types/graphql-utils";
import { GQL } from "../../../types/schema";
import { USER_SESSION_ID_PREFIX } from "../../../utils/constants";
import { formatYupError } from "../../../utils/formatYupError";
import { accountLockedError, emailConfirmError, invalidLogin } from "./errorMessages";

const errorResponse = (error) => {
	return [{
		message: error,
		path: "Login",
	}];
};

export const resolvers: IResolverMap = {
	Mutation: {
		login: async (
			_,
			args: GQL.ILoginOnMutationArguments,
			{
				req,
				redis,
			},
		) => {
			const { session } = req;
			try {
				await userValidationSchema.validate(args, { abortEarly: false });
			} catch (err) {
				return formatYupError(err);
			}
			const { email, password } = args;
			const user = await User.findOne({
				where: { email },
			});
			if (!user) {
				return errorResponse(invalidLogin);
			}
			if (!user.confirmed) {
				return errorResponse(emailConfirmError);
			}
			if (user.lockedAccount) {
				return errorResponse(accountLockedError);
			}
			const valid = await bcrypt.compare(password, user.password);
			if (!valid) { return errorResponse(invalidLogin); }
			session.userId = user.id;
			if (req.sessionID) {
				redis.lpush(`${USER_SESSION_ID_PREFIX}${user.id}`, req.sessionID);
			}
			return null;
		},
	},
};
