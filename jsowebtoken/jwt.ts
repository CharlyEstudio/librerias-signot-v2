import * as jwt from 'jsonwebtoken';

const token = jwt.sign({
    data: {
        user: 'Signot',
        role: '1',
        politicas: [
            { politica: "A-1" },
            { politica: "A-2" }
        ]
    }
}, 'shhhhh', {expiresIn: "5m", algorithm: 'none'});
console.log(token);
