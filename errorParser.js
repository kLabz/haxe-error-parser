'use strict';

// 1: file, 2: line, 3: endline, 4: column, 5: endColumn, 6: severity, 7: message
const problemMatcher = new RegExp(
    "^(.+):(\\d+):\\s(?:lines\\s\\d+-(\\d+)|character(?:s\\s(\\d+)-|\\s)(\\d+))\\s:\\s(?:(Warning)\\s:\\s)?(.*)\\r?$"
);

const fatalErrorMatcher = new RegExp("^Fatal error: (.*)$");

const missingLibErrorMatcher = new RegExp(
    "^Error: Error: Library ([^\s]+) is not installed : run 'haxelib install (?:[^']+)'$"
);

const unknownHaxeOption = new RegExp(
    "^Error: : unknown option '.*'.$"
);

function identifyError(error) {
    if (!error) return false;
    if (problemMatcher.test(error)) return true;
    if (fatalErrorMatcher.test(error)) return true;
    if (missingLibErrorMatcher.test(error)) return true;
    if (unknownHaxeOption.test(error)) return true;
    return false;
}

module.exports = {
    problemMatcher,
    identifyError
};

