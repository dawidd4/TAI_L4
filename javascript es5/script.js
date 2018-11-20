"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplicationTable() {
    var multiplicationTable = '';
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            multiplicationTable += i * j + " ";
        }
        multiplicationTable += "\n";
    }
    return multiplicationTable;
}
exports.multiplicationTable = multiplicationTable;
