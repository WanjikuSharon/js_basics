// ------------------ Class definition ------------------
class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); // key -> { value, expireTime }
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
            this.cache.delete(key); // remove expired
            return -1;
        }
        return entry.value;
    }

    count() {
        const now = Date.now();
        let valid = 0;
        for (let [key, entry] of this.cache.entries()) {
            if (entry.expireTime > now) valid++;
            else this.cache.delete(key);
        }
        return valid;
    }
}

// ------------------ Example 1 ------------------
console.log("Example 1:");
let cache1 = new TimeLimitedCache();
console.log(cache1.set(1, 42, 100));   // false (new key)
setTimeout(() => console.log(cache1.get(1)), 50);   // 42
setTimeout(() => console.log(cache1.count()), 50);  // 1
setTimeout(() => console.log(cache1.get(1)), 150);  // -1

// ------------------ Example 2 ------------------
setTimeout(() => {
    console.log("\nExample 2:");
    let cache2 = new TimeLimitedCache();
    console.log(cache2.set(1, 42, 50));   // false
    setTimeout(() => console.log(cache2.set(1, 50, 100)), 40); // true (overwrite)
    setTimeout(() => console.log(cache2.get(1)), 50);   // 50
    setTimeout(() => console.log(cache2.get(1)), 120);  // 50
    setTimeout(() => console.log(cache2.get(1)), 200);  // -1 (expired)
    setTimeout(() => console.log(cache2.count()), 250); // 0
}, 500); // delay start of Example 2 so it doesn't overlap Example 1
