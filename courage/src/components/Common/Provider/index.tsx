import React, { Fragment } from 'react'
import GlobalStyle from 'styles/global';
import Layout from '../Layout';
import Router from "../../Router/AppRouter";

const Provider = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Layout>
                <Router />
            </Layout>
        </Fragment>
    )
}

export default Provider;