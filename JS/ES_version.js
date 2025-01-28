var ecmaScriptInfo = (function() {
    // () => { is not allowed
    function getESEdition() {
        var array = [];
        switch (true) {
            case !Array.isArray:
                return 3;
            case !window.Promise:
                return 5;
            case !array.includes:
                return 6;
            case !''.padStart:
                return 7;
            case !Promise.prototype.finally:
                return 8;
            case !window.BigInt:
                return 9;
            case !Promise.allSettled:
                return 10;
            case !''.replaceAll:
                return 11;
            case !array.at:
                return 12;
            case !Array.prototype.findLast:
                return 13;
            case !String.prototype.isWellFormed:
                return 14;
            default:
                return 15;
        }
    }

    function getESYear(edition) {
        return {
            3: 1999,
            5: 2009
        }[edition] || (2009 + edition); // nullish coalescing (??) is not allowed
    }

    const edition = getESEdition();
    const year = getESYear(edition);

    return {
        edition: edition, // usually shortened [edition,]
        year: year,       // usually shortened [year,]
        text: 'Edition: '+ edition +' | Year: '+ year
        // `Edition: ${edition} | Year: ${year}` is not allowed
    }
})();

console.log(ecmaScriptInfo.text);
document.write(ecmaScriptInfo.text);
/* трубопровода пока нет
const incrementOne = (value) => value + 1;
const decrementOne = (value) => value - 1
const output = 20 |> incrementOne |> decrementOne; // 20
console.log(output);
 */
