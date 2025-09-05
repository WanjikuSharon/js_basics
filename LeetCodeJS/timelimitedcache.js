// ------------------ Class definition ------------------
class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); // store key -> { value, expireTime }
    }

    set(key, value, duration) {
        const now = Date.now();
        const exists = this.cache.has(key) && this.cache.get(key).expireTime > now;

        this.cache.set(key, {
            value,
            expireTime: now + duration
        });

        return exists;
    }

    get(key) {
        const now = Date.now();
        if (!this.cache.has(key)) return -1;

        const entry = this.cache.get(key);
        if (entry.expireTime < now) {
            this.cache.delete(key); // expired, clean it up
            return -1;
        }
        return entry.value;
    }

    count() {
        const now = Date.now();
        let valid = 0;
        for (let [key, entry] of this.cache.entries()) {
            if (entry.expireTime > now) valid++;
            else this.cache.delete(key); // clean expired keys
        }
        return valid;
    }
}

// ------------------ Example usage ------------------
const cache = new TimeLimitedCache();

console.log(cache.set(1, 42, 100)); // false (new key added)
setTimeout(() => console.log(cache.get(1)), 50);   // 42 (still valid)
setTimeout(() => console.log(cache.count()), 50);  // 1 (one valid key)
setTimeout(() => console.log(cache.get(1)), 150);  // -1 (expired)
