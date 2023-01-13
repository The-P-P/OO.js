import User from "./User.js";
import Docente from "./doscente.js";
import Admin from "./Admin.js";

const novoUser = new User('youri', 'y@m.com', '2001-05-01')
console.log(novoUser.exibirInfos())