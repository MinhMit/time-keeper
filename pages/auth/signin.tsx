import type { NextPage } from 'next'
import AuthLayout from '@components/layouts/auth';

type Props = {};
const SignIn = (props: Props) => {
    return (
        <AuthLayout>
            <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <h2 className="card-title fw-bold mb-1">Welcome to Megiservices! 👋</h2>
                    <p className="card-text mb-2">Please sign-in to your account and start the adventure</p>
                    <form className="auth-login-form mt-2" action="index.html" method="POST">
                        <div className="mb-1">
                            <label className="form-label">Email</label>
                            <input className="form-control" id="login-email" type="text" name="login-email" placeholder="john@example.com" aria-describedby="login-email" />
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between">
                                <label className="form-label" >Password</label><a href="auth-forgot-password-cover.html"><small>Forgot Password?</small></a>
                            </div>
                            <div className="input-group input-group-merge form-password-toggle">
                                <input className="form-control form-control-merge" id="login-password" type="password" name="login-password" placeholder="············" aria-describedby="login-password" /><span className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="form-check">
                                <input className="form-check-input" id="remember-me" type="checkbox" />
                                <label className="form-check-label" > Remember Me</label>
                            </div>
                        </div>
                        <button className="btn btn-primary w-100" >Sign in</button>
                    </form>
                    <p className="text-center mt-2"><span>New on our platform?</span><a href="auth-register-cover.html"><span>&nbsp;Create an account</span></a></p>
                </div>
            </div>
        </AuthLayout>
    )
}
export default SignIn