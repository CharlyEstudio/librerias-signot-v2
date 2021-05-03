import * as bcrypt from 'bcryptjs';


// Con HASH
const salt = bcrypt.genSaltSync(10);
console.log(salt);
const hash = bcrypt.hashSync("B4c0/\/", salt);
console.log(hash);

// Auto generado el HASH
const hashAutoGen = bcrypt.hashSync('bacon', 10);
console.log(hashAutoGen);

// Veririfcar HASH
console.log(bcrypt.compareSync("B4c0/\/", hash));
console.log(bcrypt.compareSync("not_bacon", hashAutoGen));
