import React from 'react'
import * as actions from "../src/containers/checkout/actions";
import * as NumberFormatter from '../src/helper/NumberFormatter'
import withRedux from "next-redux-wrapper";
import reduxStore from "../src/reduxStore";
import {bindActionCreators} from "redux";

import MainLayout from "../src/components/common/MainLayout";
import Link from 'next/link'

class CheckoutPage extends React.Component {

    componentWillMount() {
        const { totalPeople } = this.props.url.query

        this.props.actions.calculate(totalPeople)
    }

    renderPrice() {
        const { totalPriceWithoutDiscount, totalPriceWithDiscount, discountPrice, promotions } = this.props.checkout
        const renderPromotions = promotions.map(promotion => {
            return (
                <tr key={promotion.name}>
                    <td colSpan={2}>{promotion.description}</td>
                </tr>
            )
        })

        return (
            <table className="table">
                <tbody>
                {renderPromotions}
                <tr>
                    <td>Total Price</td>
                    <td>{NumberFormatter.format(totalPriceWithoutDiscount)} ฿</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>{NumberFormatter.format(discountPrice)} ฿</td>
                </tr>
                <tr>
                    <td>Total Price with Discount</td>
                    <td>{NumberFormatter.format(totalPriceWithDiscount)} ฿</td>
                </tr>
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <MainLayout>
                <section className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Thank you customers for using the service ^o^
                            </h1>

                            <br/>

                            <div className="columns">
                                <div className="column"/>
                                <div className="column is-half">
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Bill
                                            </p>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                {this.renderPrice()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column"/>
                            </div>

                            <br/>

                            <Link href='/index' replace>
                                <a className="button is-primary is-medium">
                                    Go to Main Page
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </MainLayout>
        )
    }
}

const mapStateToProps = ({checkout}) => {
    return {checkout};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default withRedux(reduxStore, mapStateToProps, mapDispatchToProps)(CheckoutPage);