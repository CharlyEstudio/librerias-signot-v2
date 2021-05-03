import jwksClient from 'jwks-rsa';

const client = jwksClient({
    jwksUri: 'https://sandrino.auth0.com/.well-known/jwks.json',
    requestHeaders: {},
    timeout: 30000
});
const kid = 'RkI5MjI5OUY5ODc1N0Q4QzM0OUYzNkVGMTJDOUEzQkFCOTU3NjE2Rg';
client.getSigningKey(kid)
    .then(key => {
        const signingKey = key.getPublicKey();
        console.log(signingKey);
    });
