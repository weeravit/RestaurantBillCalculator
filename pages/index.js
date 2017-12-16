import MainLayout from '../src/component/common/MainLayout'
import Link from 'next/link'

const getSeats = (maximum = 60) => {
    let options = [];

    for (let seat = 1; seat <= maximum; seat++) {
        options.push(<option value={seat}>{seat}</option>)
    }

    return options
}

export default () => (
    <MainLayout>
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title">
                        Welcome to Buffet Restaurant
                    </h1>

                    <br/>

                    <p className="subtitle">
                        How many people will come?
                    </p>

                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <div className="select is-medium">
                                <select>{getSeats()}</select>
                            </div>
                        </div>
                    </div>

                    <br/>

                    <Link href={{pathname: '/promotion', query: {totalPeople: 6}}}>
                        <a className="button is-success is-medium">Confirm</a>
                    </Link>
                </div>
            </div>

            <div className="hero-foot">
                <div className="container has-text-centered">
                    <h1 className="title">*** This program will calculate discount itself without fill coupon code ***</h1>
                </div>
            </div>
        </section>
    </MainLayout>
);
