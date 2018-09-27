const parser = require('./errorParser');

module.exports = {
    format: require('./errorFormatter'),
    transform: require('./errorTransformer'),
    problemMatcher: parser.problemMatcher,
    identifyError: parser.identifyError
}
