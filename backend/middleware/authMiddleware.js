import  jwt  from 'jsonwebtoken';

const authorize = (roles = []) => {
    return (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) return res.status(401).send('Access denied');

        jwt(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(403).send('Invalid token');
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).send('Insufficient permissions');
            }
            req.user = decoded;
            next();
        });
    };
};

export default authorize;