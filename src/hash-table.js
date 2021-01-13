// Hash tables use an array under the hood. There is no native support for hashes in most languages.
// Finding an element in an array is not very fast (linear time) but finding an element based on its index is very fast (constant time).
// For that reason, hash tables use hashing algorithms to translate a key into an array index.
// Each element in a hash table's backing array is known as a bucket. A bucket can store multiple values.
// When a key-value pair is added to a bucket that already has existing key-value pairs, it's known as a collision.
// Collisions are a necessary part of hash tables. Otherwise, we'd need unnecessarily big arrays to account for every possible unique key a hash table can hold.
// All the main methods of a hash table rely on the hashing algorithm, whether that's methods to add, look up, or remove key-value pairs.

export default class HashTable {
    //size will be prime too
    constructor(size = 51) {
      this.keyMap = new Array(size);
    }

    //another example of hash function
    hash(key) {
        let total = 0;
        //here can be other prime number - prime numbers very helpfull with collisions
        let prime = 31;
        for(let i =0; i < Math.min(key.length, 100); i++) {
            let value = key[i].charCodeAt(0)-96;
            total = (total*prime+value)%this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
      const index = this.hash(key);
      if (this.keyMap[index] === undefined) {
        this.keyMap[index] = []
      }
      this.keyMap[index].push([key, value]);
    }

    get(key) {
      const index = this.hash(key);
      const bucket = this.keyMap[index];
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i][0] === key) {
            return bucket[i][1];
          }
        }
      }
      return null;
    }

    keys() {
        let keysArray = [];
        for(let i=0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    if(!keysArray.includes(this.keyMap[i][j][1])) {
                        keysArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return keysArray;
    }

    values() {
        let valuesArray = [];
        for(let i=0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    if(!valuesArray.includes(this.keyMap[i][j][1])) {
                        valuesArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArray; 
    }
  }