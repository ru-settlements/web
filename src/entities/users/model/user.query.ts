import { UserSignInDto } from "~/entities/users";
import { $fetch } from "ofetch";

const resource = '/authentication'
const baseURL = 'http://localhost:3000'

export function signIn(userSignInDto: UserSignInDto) {
  return $fetch(resource, { method: 'POST', body: userSignInDto, baseURL })
}
