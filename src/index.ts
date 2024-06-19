import * as _ from 'lodash';
import hindiBadWords from '../data/hindi-bad-words';
import englishBadWords from '../data/english-bad-words';
import frenchBadWords from '../data/french-bad-words';
import germanBadWords from '../data/german-bad-words';
import spanishBadWords from '../data/spanish-bad-words';
import italianBadWords from '../data/italian-bad-words';

interface BadWordsDictionary {
  [key: string]: number;
}

let badWordsDictionary: BadWordsDictionary = {};
let userDefinedWords: BadWordsDictionary = {};

const profanity = {
  maskBadWords: function (message: string, maskWith?: string): string {
    if (!message || typeof message !== "string") {
      throw new Error("message passed to the function must be a string");
    }
    const cleanedMessage = message.split(" ").map((word: string) => {
      if (profanity.isMessageDirty(word)) {
        if (maskWith && maskWith !== null && typeof maskWith === "string") {
          return word.replace(/./g, maskWith);
        }
        return word.replace(/./g, "*");
      }
      return word;
    }).join(" ");
    return cleanedMessage;
  },

  isMessageDirty: function (message: string): boolean {
    if (!message || typeof message !== "string") {
      throw new Error("message passed to the function must be a string");
    }
    const messageWords = message.split(" ");
    badWordsDictionary = _.merge(hindiBadWords, englishBadWords, frenchBadWords, germanBadWords, spanishBadWords, italianBadWords, userDefinedWords);
    badWordsDictionary = _.transform(badWordsDictionary, (result: BadWordsDictionary, val: number, key: string) => {
      result[key.toLowerCase()] = val;
    });
    let flag = false;
    for (let i = 0; i < messageWords.length; i++) {
      if (badWordsDictionary.hasOwnProperty(messageWords[i].trim().toLowerCase())) {
        flag = true;
        break;
      }
    }
    return flag;
  },

  addWords: function (wordList: string | string[]): BadWordsDictionary {
    if (!wordList) return badWordsDictionary;
    if (typeof wordList === "string" && !alreadyExists(wordList, badWordsDictionary)) {
      userDefinedWords[wordList.trim()] = 1;
    }
    if (Array.isArray(wordList)) {
      wordList.map((word: string) => {
        if (typeof word === "string" && !(alreadyExists(word, badWordsDictionary))) {
          userDefinedWords[word.trim()] = 1;
        }
      });
    }
    badWordsDictionary = _.merge(badWordsDictionary, userDefinedWords);
    return badWordsDictionary;
  },

  removeWords: function (wordList: string | string[]): BadWordsDictionary {
    if (!wordList) return badWordsDictionary;
    if (typeof wordList === "string" && alreadyExists(wordList, badWordsDictionary))
      delete badWordsDictionary[wordList.trim()];
    if (Array.isArray(wordList)) {
      wordList.map((word: string) => {
        if (typeof word === "string" && alreadyExists(word, badWordsDictionary))
          delete badWordsDictionary[word.trim()];
      });
    }
    return badWordsDictionary;
  },

  countBadWords: function (message: string): number {
    if (!message || typeof message !== "string") {
      throw new Error("message passed to the function must be a string");
    }
    const messageWords = message.split(" ");
    let count = 0;
    for (let i = 0; i < messageWords.length; i++) {
      if (badWordsDictionary.hasOwnProperty(messageWords[i].trim().toLowerCase())) {
        count++;
      }
    }
    return count;
  },

  getListOfBadWords: function (message: string): string[] {
    if (!message || typeof message !== "string") {
      throw new Error("message passed to the function must be a string");
    }
    const messageWords = message.split(" ");
    const badWordsList: string[] = [];
    for (let i = 0; i < messageWords.length; i++) {
      if (badWordsDictionary.hasOwnProperty(messageWords[i].trim().toLowerCase())) {
        badWordsList.push(messageWords[i].trim().toLowerCase());
      }
    }
    return badWordsList;
  },

  isSpecificWordBad: function (word: string): boolean {
    if (!word || typeof word !== "string") {
      throw new Error("word passed to the function must be a string");
    }
    return badWordsDictionary.hasOwnProperty(word.trim().toLowerCase());
  }
};

function alreadyExists(word: string, wordList: BadWordsDictionary): boolean {
  if (!word || !wordList) return false;
  return !!wordList.hasOwnProperty(word);
}

export = profanity;