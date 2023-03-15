export const getRandomNumber = (min, max) => {
    const amplitude = max - min;
    const randomNumber = min + Math.round(Math.random() * amplitude);
    return randomNumber;
};
