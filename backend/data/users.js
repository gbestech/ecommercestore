import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mustapha Ahmad",
    email: "ahmed@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "John Okafor",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
export default users;
