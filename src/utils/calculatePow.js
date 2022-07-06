export function calculatePow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}
// C2.8 Задание 5 ответ для самопроверки