/**
 * Parse object
 * @param {Object} coll Object to be parsed
 * @returns {Object} Parsed object
 * @example
 * parseObject({"one" : 1}); // {one: 1}
 */
export default (coll) => JSON.parse(coll);
