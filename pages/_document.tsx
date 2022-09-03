import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en-us" className="loading dark-layout" data-layout="dark-layout" data-textdirection="ltr">
            <Head />
            <body className="pace-done vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  ">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}