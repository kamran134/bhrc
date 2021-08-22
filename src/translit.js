'use strict';

export const transliterate = function(config) {
    const _preset = config ? config.preset : "ru";

    const _firstLetterAssociations = {
        "а": "a",
        "б": "b",
        "в": "v",
        "ґ": "g",
        "г": "g",
        "д": "d",
        "е": "e",
        "ё": "yo",
        "є": "ye",
        "ж": "zh",
        "з": "z",
        "и": "i",
        "і": "i",
        "ї": "yi",
        "й": "i",
        "к": "k",
        "л": "l",
        "м": "m",
        "н": "n",
        "о": "o",
        "п": "p",
        "р": "r",
        "с": "s",
        "т": "t",
        "у": "u",
        "ф": "f",
        "х": "h",
        "ц": "c",
        "ч": "ch",
        "ш": "sh",
        "щ": "sh'",
        "ъ": "",
        "ы": "i",
        "ь": "",
        "э": "e",
        "ю": "yu",
        "я": "ya",
        "ə": "e",
        "Ə": "e",
        "Ö": "O",
        "ö": "o",
        "Ü": "u",
        "ü": "u",
        "Ç": "Ch",
        "ç": "ch",
        "Ş": "Sh",
        "ş": "sh",
        "İ": "I",
        "ı": "i",
        "Ğ": "Gh",
        "ğ": "gh",
        "”": "",
        "“": "",
        "%": "",
        "\:": "",
        "\;": "",
        "\'": "",
        "\"": "",
        "\.": "",
        "\,": "",
        "\?": "",
        "\!": ""
    };

    const _associations = Object.assign({}, _firstLetterAssociations);

    function transform(input, spaceReplacement) {
        if (!input) {
            return "";
        }

        // We must normalize string for transform all unicode chars to uniform form
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
        const normalizedInput = input.normalize();

        let newStr = "";
        for (let i = 0; i < normalizedInput.length; i++) {
            const isUpperCaseOrWhatever = normalizedInput[i] === normalizedInput[i].toUpperCase();
            let strLowerCase = normalizedInput[i];
            if (strLowerCase === " " && spaceReplacement) {
                newStr += spaceReplacement;
                continue;
            }
            let newLetter = _preset === "uk" && strLowerCase === "г" && i > 0 && normalizedInput[i - 1].toLowerCase() === "з" ?
                "gh" :
                (i === 0 ? _firstLetterAssociations : _associations)[strLowerCase];
            if ("undefined" === typeof newLetter) {
                newStr += isUpperCaseOrWhatever ? strLowerCase.toUpperCase() : strLowerCase;
            } else {
                newStr += isUpperCaseOrWhatever ? newLetter.toUpperCase() : newLetter;
            }
        }
        return newStr;
    }

    return {
        transform: transform
    };
};