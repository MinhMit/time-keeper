import { LayoutProps } from '@models/common'

const AuthLayout = ({ children }: LayoutProps) => {
    return (
        <div >
            <div className='app-content content'>
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">
                        <div className="auth-wrapper auth-cover">
                            <div className="auth-inner row m-0">
                                <a className="brand-logo" href="index.html">
                                    <h2 className="brand-text text-primary ms-1">Time Keeper</h2>
                                </a>

                                <div className="d-none d-lg-flex col-lg-8 align-items-center p-5">
                                    <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                                        <img className="img-fluid" src="/images/banner.svg" alt="Login V2" />
                                    </div>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuthLayout