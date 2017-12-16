import MainLayout from "../src/components/common/MainLayout";
import Link from 'next/link'

const logs = (props) => {
    console.log(props.url.query.totalPeople)
}

export default (props) => (
    <MainLayout>
        {logs(props)}
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
