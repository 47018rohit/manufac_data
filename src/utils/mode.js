// Mode function

export default function mode(rawObject) {
    const modeObject = {}

    for (let key in rawObject) {
        const numberCount = new Map(); // Use a Map for counting occurrences
        let maxCount = 0;
        let mode = [];

        // First pass: Count occurrences
        for (const num of rawObject[key]) {
            const count = numberCount.get(num) || 0;
            numberCount.set(num, count + 1);
            if (count + 1 > maxCount) {
                maxCount = count + 1;
            }
        }

        // Second pass: Find mode(s)
        for (const [num, count] of numberCount) {
            if (count === maxCount) {
                mode.push(num);
            }
        }

        modeObject[key] = mode
    }

    return modeObject
}