import MainLayout from '../src/component/common/MainLayout'

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
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <br/>

                    <a className="button is-success is-medium">Confirm</a>
                </div>
            </div>
        </section>
    </MainLayout>
);
