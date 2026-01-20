/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let results = ''
    for(let i=0; i<Math.max(word1.length, word2.length); i++) {
        if (i<word1.length) results += word1[i];
        if (i<word2.length) results += word2[i];
    }
    return results;
};

mergeAlternately("abc", "pqr");