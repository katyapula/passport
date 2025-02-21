import {z} from "zod";

const validUser = { email: "admin@gmail.com", password: "admin" };

export const UserSchema = z.object({
  email: z.string().email().describe("should be a valid email"),
  password: z.string().min(4).describe("should be more then 4 characters"),
});

export const userToBase64Token = (email: string, password: string) => {
  return btoa(email + password);
}

export const validUserToken = userToBase64Token(validUser.email, validUser.password);

export const isAuthenticated = () => {
  return localStorage.getItem("token") === validUserToken;
};
