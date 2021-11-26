import { BaseLogger, ElasticLogger } from "../crossCuttingConcems/logging/logger.js";
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yuklendi")

let logger1=new ElasticLogger()
let userService = new UserService(logger1);

let user1 = new User(1, "engin", "demiroğ", "balıkesir")
let user2 = new User(2, "ebru", "demiroğ", "ankara")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))


userService.add(user1)
userService.getById(1)
userService.list()





let customer = { id: 1, firstName: "Engin " }
customer.lastName = "demiroğ"
//prototyping
console.log(customer.lastName)
