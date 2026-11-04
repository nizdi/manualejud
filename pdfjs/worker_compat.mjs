// Compatibilidade com Map e WeakMap em navegadores sem métodos getOrInsert.
for (const Collection of [Map, WeakMap]) {
  if (!Collection.prototype.getOrInsertComputed) {
    Collection.prototype.getOrInsertComputed = function (key, callback) {
      if (this.has(key)) return this.get(key);
      const value = callback(key);
      this.set(key, value);
      return value;
    };
  }
  if (!Collection.prototype.getOrInsert) {
    Collection.prototype.getOrInsert = function (key, value) {
      if (this.has(key)) return this.get(key);
      this.set(key, value);
      return value;
    };
  }
}
await import('./pdf.worker.mjs');
