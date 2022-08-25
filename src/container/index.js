import React, { Suspense } from 'react';
import axios from 'axios';
import { Provider } from "react-redux";
import { BrowserRouter as Router} from 'react-router-dom';
import store from '../store';
import Routes from './routes';
import ScrollToTop from '../components/common/scroll';
import Loader from '../components/common/loader';
import { setupAxios } from '../utils';
const { PUBLIC_URL } = process.env;

setupAxios(axios, store);

const AppContainer = () => (
    <Provider store={store}>
        <Suspense fallback={<Loader isSuspense />}>
            <Loader>
                <Router basename={PUBLIC_URL}>
                    <ScrollToTop>
                        <Routes />
                    </ScrollToTop>
                </Router>
            </Loader>
        </Suspense>
    </Provider>
)

export default AppContainer;