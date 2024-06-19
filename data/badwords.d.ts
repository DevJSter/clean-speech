// badWords.d.ts
declare module 'badWords' {
  export interface BadWordsDictionary {
    [key: string]: number;
  }

  export const englishBadWords: BadWordsDictionary;
  export const hindiBadWords: BadWordsDictionary;
  export const frenchBadWords :BadWordsDictionary;
  export const germanBadWords :BadWordsDictionary;
  export const italianBadWords :BadWordsDictionary
  export const spanishBadWords :BadWordsDictionary
  
}