// Decision Making Tasks: Leap Year, Ticket Pricing, Weather Adviser

/**
 * Checks if a given year is a leap year.
 * - Divisible by 400 -> true
 * - Divisible by 100 -> false
 * - Divisible by 4   -> true
 * - Otherwise        -> false
 */
function isLeapYear(year) {
    if (typeof year !== 'number' || !Number.isInteger(year)) {
        throw new TypeError('Input year must be an integer.');
    }
    
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Determines movie ticket price based on age:
 * - Children (<= 12): $10
 * - Teenagers (13-17): $15
 * - Adults (>= 18): $20
 */
function getTicketPrice(age) {
    if (typeof age !== 'number' || age < 0 || !Number.isFinite(age)) {
        throw new Error('Please enter a valid non-negative age.');
    }

    if (age <= 12) {
        return 10;
    } else if (age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

/**
 * Advises what to wear based on temperature and rain status.
 */
function adviseClothing(temperature, isRaining) {
    if (typeof temperature !== 'number' || !Number.isFinite(temperature)) {
        throw new Error('Temperature must be a valid number.');
    }

    let tempCategory;
    if (temperature < 10) {
        tempCategory = 'COLD';
    } else if (temperature <= 22) {
        tempCategory = 'MODERATE';
    } else {
        tempCategory = 'WARM';
    }

    switch (tempCategory) {
        case 'COLD':
            return isRaining
                ? 'Cold and raining: Wear a warm coat, boots, and take an umbrella.'
                : 'Cold weather: Wear a heavy coat, sweater, and warm pants.';
        case 'MODERATE':
            return isRaining
                ? 'Cool and raining: Wear a raincoat or jacket and take an umbrella.'
                : 'Mild weather: A light jacket or hoodie is fine.';
        case 'WARM':
            return isRaining
                ? 'Warm but raining: Wear light clothes and carry an umbrella.'
                : 'Warm and sunny: Wear a t-shirt and shorts.';
        default:
            return 'Dress comfortably.';
    }
}

module.exports = {
    isLeapYear,
    getTicketPrice,
    adviseClothing
};
