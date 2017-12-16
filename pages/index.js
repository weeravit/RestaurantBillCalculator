import MainLayout from '../src/component/common/MainLayout'

export default () => (
    <MainLayout>
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        Welcome to Buffet Restaurant
                    </h1>

                    <br/>

                    <p class="subtitle">
                        How many people will come ?
                    </p>

                    <div class="field is-grouped is-grouped-centered">
                        <div class="control">
                            <div class="select is-medium">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <br/>

                    <a class="button is-success is-medium">Confirm</a>
                </div>
            </div>
        </section>
    </MainLayout>
);
