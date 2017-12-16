import React from 'react'
import * as actions from "../src/containers/checkout/actions";
import withRedux from "next-redux-wrapper";
import reduxStore from "../src/reduxStore";
import {bindActionCreators} from "redux";

import MainLayout from "../src/components/common/MainLayout";
import Link from 'next/link'

// console.log(props.url.query.totalPeople)

class CheckoutPage extends React.Component {

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