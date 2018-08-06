module.exports = (document, {_rev} = {}) => (_rev ? {...document, _rev} : document)
