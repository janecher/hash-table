// Hash tables use an array under the hood. There is no native support for hashes in most languages.
// Finding an element in an array is not very fast (linear time) but finding an element based on its index is very fast (constant time).
// For that reason, hash tables use hashing algorithms to translate a key into an array index.
// Each element in a hash table's backing array is known as a bucket. A bucket can store multiple values.
// When a key-value pair is added to a bucket that already has existing key-value pairs, it's known as a collision.
// Collisions are a necessary part of hash tables. Otherwise, we'd need unnecessarily big arrays to account for every possible unique key a hash table can hold.
// All the main methods of a hash table rely on the hashing algorithm, whether that's methods to add, look up, or remove key-value pairs.

export default class HashTable {
    constructor() {
      this.array = [];
    }

    hash(key) {
      return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
    }

    set(key, value) {
      const index = this.hash(key);
      if (this.array[index] === undefined) {
        this.array[index] = []
      }
      this.array[index].push([key, value]);
    }

    get(key) {
      const element = this.hash(key);
      const bucket = this.array[element];
      if (bucket != undefined) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i][0] === key) {
            return bucket[i][1];
          }
        }
      }
      return null;
    }
  }