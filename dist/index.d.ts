interface BadWordsDictionary {
    [key: string]: number;
}
declare const profanity: {
    maskBadWords: (message: string, maskWith?: string) => string;
    isMessageDirty: (message: string) => boolean;
    addWords: (wordList: string | string[]) => BadWordsDictionary;
    removeWords: (wordList: string | string[]) => BadWordsDictionary;
    countBadWords: (message: string) => number;
    getListOfBadWords: (message: string) => string[];
    isSpecificWordBad: (word: string) => boolean;
};
export = profanity;
