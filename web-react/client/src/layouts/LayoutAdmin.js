import React from "react";
import { Route } from 'react-router-dom';
import { Layout } from "antd";

import './Layoutadmin.scss';

export default function LayoutAdmin(props){
    //console.log(props);

    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <h2>Menu sider Admin</h2>
            <Layout>
                <Header>Header....</Header>
                <Content>
                    <LoadRouters routes={routes}/>
                </Content>
                <Footer>
                    Leandro Virzi 2022
                </Footer>
            </Layout>
        </Layout>
    );
};


function LoadRouters ({ routes }) {
    console.log(routes);

    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))
}