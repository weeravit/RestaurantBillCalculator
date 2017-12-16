import React from 'react'
import * as actions from "../src/containers/checkout/actions";
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
        const { totalPriceWithoutDiscount, totalPriceWithDiscount, discountPrice } = this.props.checkout

        return (
            <table class="table">
                <tbody>
                <tr>
                    <td>Total Price</td>
                    <td>{totalPriceWithoutDiscount} Baht</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>{discountPrice} Baht</td>
                </tr>
                <tr>
                    <td>Total Price with Discount</td>
                    <td>{totalPriceWithDiscount} Baht</td>
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

                            <div class="columns">
                                <div class="column"/>
                                <div class="column is-half">
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
                                <div class="column"/>
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