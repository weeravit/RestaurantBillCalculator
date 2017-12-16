import Constants from './constants'
import Config from '../../config'
import * as Promotions from '../../helper/Promotions'

export const calculate = (totalPeople) => {
    return (dispatch) => {
        totalPeople = Number(totalPeople)
        let promotions = []
        let discountPercent = 0
        let discountPrice = 0
        let totalPriceWithDiscount = 0
        const totalPriceWithoutDiscount = Config.pricePerPerson * totalPeople

        if (Promotions.isCome4Pay3(totalPeople)) {
            discountPercent += Promotions.getCome4Pay3DiscountPercent(totalPeople)
            promotions.push(Config.promotions.COME4PAY3)
        }

        if (Promotions.isDiscount15Percent(totalPeople)) {
            discountPercent += Promotions.getDiscount15Percent()
            promotions.push(Config.promotions.DC15PERCENT)
        }

        if (Promotions.isDiscount20Percent(totalPeople)) {
            discountPercent += Promotions.getDiscount20Percent()
            promotions.push(Config.promotions.DC20PERCENT)
        }

        if (Promotions.isDiscount25Percent(totalPeople)) {
            discountPercent = Promotions.getDiscount25Percent()
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
