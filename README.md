# clean-speech-hindi

### Author: Shubham Tiwari

This is a small Node.js module for dealing with profanity in English and Hindi. This module has functionalities for detecting bad words and cleaning them.
Technologies used: Node.js, TypeScript

### Installation
Run the following command:

```sh
npm install @devshubham/clean-speech-hindi
```

### Requirements
It internally uses lodash, which will be automatically installed.

### Code Example

```typescript
import profanity from '@devshubham/clean-speech-hindi';

const maskBadWords = () => {
  const message = "hi asshole you are a bitch chutiya... ";
  const cleaned = profanity.maskBadWords(message);
  console.log(cleaned); // hi ******* you are a ***** ******* ....
}

const isMessageDirty = () => {
  const message = "hi asshole you are a bitch chutiya";
  const isDirty = profanity.isMessageDirty(message);
  console.log(isDirty); // true

  const cleanMessage = "hi there. How are you";
  const isClean = profanity.isMessageDirty(cleanMessage);
  console.log(isClean); // false
}

const addWords = () => {
  const newWords = ["this", "dumbness"];
  const updatedDictionary = profanity.addWords(newWords); 
  // this will add the new words to the dictionary of bad words.
  // This function optionally returns the entire dictionary of bad words.
  console.log(updatedDictionary);
}

const removeWords = () => {
  const wordsToRemove = ["this", "dumbness"];
  const updatedDictionary = profanity.removeWords(wordsToRemove); 
  // This will remove the words from the dictionary of bad words.
  // This function optionally returns the entire dictionary of bad words.
  console.log(updatedDictionary);
}
```

### Unit Tests
Run the following command:

```sh
npm test
```

### Contributors
Shubham Tiwari

### License
MIT License
