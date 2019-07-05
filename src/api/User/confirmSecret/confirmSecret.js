import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        confirmSecret: async(_, args) => {
            const { email, secret } = args;
            console.log(email, secret);
            const user = await prisma.user({ email });
            if (user.loginSecret === secret) {
                // JWT
                return "TOKEN";
            } else {
                throw Error("Wrong email/secret combination");
            }
        }
    }
}