import Config from '../config'

export const isCome4Pay3 = (totalPeople, couponCode = '') => {
    return totalPeople >= 4
}

export const isDiscount15Percent = (totalPeople, couponCode = '') => {
    const totalPrice = Config.pricePerPerson * totalPeople

    return totalPrice >= 1000
}

export const isDiscount20Percent = (totalPeople, couponCode = '') => {
    return totalPeople === 2
}

export const isDiscount25Percent = (totalPeople) => {
    const totalPrice = Config.pricePerPerson * totalPeople

    return totalPrice >= 6000
}

export const getCome4Pay3DiscountPercent = (totalPeople) => {
    const totalPrice = Config.pricePerPerson * totalPeople
    const discount = Math.floor(totalPeople / 4) * Config.pricePerPerson

    return (discount * 100) / totalPrice
};

export const getDiscount15Percent = () => {
    return 15
};

export const getDiscount20Percent = () => {
    return 20
};

export const getDiscount25Percent = () => {
    return 25
};
