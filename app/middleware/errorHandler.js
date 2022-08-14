const debug = require('debug')('app:errorHandler');

module.exports = (req, res, err, next) => {
    if (err instanceof SyntaxError && err.stats == 400 && 'body' in err)
        return res.status(422).send('Error in request JSON');

    debug(err.stack, err.message);
    res.status(500).send('Internal Server Error');

    next();
};
