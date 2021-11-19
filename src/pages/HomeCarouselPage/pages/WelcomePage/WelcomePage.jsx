import React from 'react'
import { Helmet } from 'react-helmet';


export default function WelcomePage() {
    return (
        <>
            <Helmet>
                <style>{'body { background-color: #0d202a; }'}</style>
            </Helmet>
            <div>
                <div>
                    <img src="images/logo-layout/logo@2x.png" alt="Logo" />
                </div>
                <div>
                    <h2>Nos encanta verte por</h2>
                </div>
                <div>
                    <img src="images/logo-layout/title@7.png" alt="Logo" />
                </div>
                <div>
                    <p>Atrae y enamora a los mejores candidatos</p>
                </div>
            </div>
        </>
    )
}
