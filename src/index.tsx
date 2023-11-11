/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import MainLayout from './layouts/MainLayout'
import { Router } from '@solidjs/router'

const root = document.getElementById('root')

render(() =>
    (
        <Router>
            <MainLayout>
                <App />
            </MainLayout>
        </Router>
    )
    
, root!)
