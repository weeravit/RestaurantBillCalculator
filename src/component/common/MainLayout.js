import Head from 'next/head'

export default (props) => (
    <div>
        <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <title>Restaurant Bill Calculator</title>

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css"/>
        </Head>

        <div class="container">
            {props.children}
        </div>
    </div>
)
