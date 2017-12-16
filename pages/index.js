import React from 'react'
import MainLayout from '../src/components/common/MainLayout'
import Link from 'next/link'
import {bindActionCreators} from 'redux'
import withRedux from 'next-redux-wrapper'
import reduxStore from '../src/reduxStore'
import * as actions from '../src/containers/index/actions'
import Config from '../src/config'

class IndexPage extends React.Component {

    onTotalPeopleChanged = ({target: {value}}) => {
        this.props.actions.totalPeopleChanged(value)
    }

    renderSeats() {
        const options = [];
        const {maximumSeat, totalPeople} = this.props.index

        for (let seat = 1; seat <= maximumSeat; seat++) {
            options.push(<option key={seat} value={seat}>{seat}</option>)
        }

        return (
            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <div className="select is-medium">
                        <select defaultValue={totalPeople} onChange={this.onTotalPeopleChanged}>{options}</select>
                    </div>
                </div>
            </div>
        )
    }

    renderConfirmButton() {
        return (
            <Link href={{
                pathname: '/checkout',
                query: {
                    totalPeople: this.props.index.totalPeople
                }
            }}>
                <a className="button is-success is-medium">Confirm</a>
            </Link>
        )
    }

    render() {
        return (
            <MainLayout>
                <section className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Welcome to Buffet Restaurant
                            </h1>

                            <br/>

                            <p className="subtitle">
                                {Config.pricePerPerson}฿ / Person
                            </p>

                            <p className="subtitle">
                                How many person will come?
                            </p>

                            {this.renderSeats()}

                            <br/>

                            {this.renderConfirmButton()}
                        </div>
                    </div>

                    <div className="hero-foot">
                        <div className="container has-text-centered">
                            <h1 className="title">*** This program will calculate discount itself without fill coupon
                                code ***</h1>
                        </div>
                    </div>
                </section>
            </MainLayout>
        )
    }
}

const mapStateToProps = ({index}) => {
    return {index};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default withRedux(reduxStore, mapStateToProps, mapDispatchToProps)(IndexPage);