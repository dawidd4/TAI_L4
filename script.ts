export function multiplicationTable() {

    let multiplicationTable = '';

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            multiplicationTable += i * j + " ";
        }
        multiplicationTable += "\n";
    }
    return multiplicationTable;
}
