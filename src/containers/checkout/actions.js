import Constants from './constants'
import Config from '../../config'

export const calculate = (totalPeople) => {
    return (dispatch) => {
        totalPeople = Number(totalPeople)
        let promotions = []
        let discountPercent = 0
        let discountPrice = 0
        let totalPriceWithDiscount = 0
        const totalPriceWithoutDiscount = Config.pricePerPerson * totalPeople

        if (totalPeople >= 4) {
            const discount = Math.floor(totalPeople / 4) * Config.pricePerPerson
            discountPercent += (discount * 100) / totalPriceWithoutDiscount
            promotions.push(Config.promotions.COME4PAY3)
        }

        if (totalPriceWithoutDiscount >= 1000) {
            discountPercent += 15
            promotions.push(Config.promotions.DC15PERCENT)
        }

        if (totalPeople === 2) {
            discountPercent += 20
            promotions.push(Config.promotions.DC20PERCENT)
        }

        if (totalPriceWithoutDiscount >= 6000) {
            discountPercent = 25
            promotions = []
            promotions.push(Config.promotions.DC25PERCENT)
        }

        discountPrice = totalPriceWithoutDiscount * (discountPercent / 100)
        totalPriceWithDiscount = totalPriceWithoutDiscount - discountPrice

        dispatch({
            type: Constants.CHECKOUT_CALCULATE,
            payload: {
                promotions,
                discountPrice,
                totalPriceWithDiscount,
                totalPriceWithoutDiscount
            }
        })
    }
}
