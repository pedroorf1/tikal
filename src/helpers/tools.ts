import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const tools = class {
  static async validateEmail(email: string) {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }
  static async createPassword(password: string) {
    const step = 10;
    const salt = await bcrypt.genSalt(step);
    const newPassword = await bcrypt.hash(password, salt);
    return newPassword;
  }
  static async validatePassword(password: string, hash: string) {
    const validate = await bcrypt.compare(password, hash);
    return validate;
  }
  static async createToken(id: string, ddd:string, phone: string) {
    const secrete = process.env.TKSECRET
    const token = await jwt.sign({id, ddd,phone},secrete!,{expiresIn:"24h"});
    return token;
  }
  static async validateToken(token:string) {
    const secrete = process.env.TKSECRET
    const validate = await jwt.verify(token,secrete!);
    return validate;
  }
};

export default tools;
