module.exports = (document, {_rev, ...rest} = {}) => (_rev ? {...rest, ...document, _rev} : document)
