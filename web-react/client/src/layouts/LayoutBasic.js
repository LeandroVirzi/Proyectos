import React from "react";
import { Route } from "react-router-dom";
import {Layout}  from "antd";

import "./LayoutBasic.scss" // sass


export default function LayoutBasic({ routes }){
    // importo las routes de props

    const { Content, Footer } = Layout;


    return(
        <Layout>
            <h2>Menu ...</h2>
            <Layout>
                <Content>
                    <LoadRouters routes={routes}/>
                </Content>
                <Footer> Leandro Virzi 2022 </Footer>
            </Layout>
        </Layout>
    );
}

function LoadRouters ({ routes }) {

    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))
}
