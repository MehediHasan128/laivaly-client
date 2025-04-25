import { jwtDecode, JwtPayload } from 'jwt-decode';

export const decodedUserToken = (token: string) => {
    return jwtDecode(token) as JwtPayload
}