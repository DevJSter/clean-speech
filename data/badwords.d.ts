// badWords.d.ts
declare module 'badWords' {
  export interface BadWordsDictionary {
    [key: string]: number;
  }

  export const englishBadWords: BadWordsDictionary;
  export const hindiBadWords: BadWordsDictionary;
}