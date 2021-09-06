interface IFirstLetter {
    [key: string]: string
}

export const transliterate = function(config?: {preset: string}) {
    const _preset = config ? config.preset : "ru";

    const _firstLetterAssociations: IFirstLetter = {
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
        ":": "",
        ";": "",
        "'": "",
        "\"": "",
        ".": "",
        ",": "",
        "?": "",
        "!": ""
    };

    const _associations: IFirstLetter = Object.assign({}, _firstLetterAssociations);

    function transform(input: string, spaceReplacement: string) {
        if (!input) {
            return "";
        }

        // We must normalize string for transform all unicode chars to uniform form
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
        const normalizedInput: string = input.normalize();

        let newStr: string = "";
        for (let _i: number = 0; _i < normalizedInput.length; _i++) {
            const isUpperCaseOrWhatever: boolean = normalizedInput[_i] === normalizedInput[_i].toUpperCase();
            let strLowerCase: string = normalizedInput[_i];
            if (strLowerCase === " " && spaceReplacement) {
                newStr += spaceReplacement;
                continue;
            }
            let newLetter: string = _preset === "uk" && strLowerCase === "г" && _i > 0 && normalizedInput[_i - 1].toLowerCase() === "з" ?
                "gh" :
                (_i === 0 ? _firstLetterAssociations : _associations)[strLowerCase];
            if ("undefined" === typeof newLetter) {
                newStr += isUpperCaseOrWhatever ? strLowerCase.toUpperCase() : strLowerCase;
            } else {
                newStr += isUpperCaseOrWhatever ? newLetter.toUpperCase() : newLetter;
            }
        }
        return newStr;
    }

    return {
        transform
    };
};