import type { NextPage } from 'next'
import AuthLayout from '@components/layouts/auth';

type Props = {};
const SignIn = (props: Props) => {
    return (
        <AuthLayout>
            <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <h2 className="card-title fw-bold mb-1">Adventure starts here 🚀</h2>
                    <p className="card-text mb-2">Make your app management easy and fun!</p>
                    <form className="auth-register-form mt-2" action="index.html" method="POST">
                        <div className="mb-1">
                            <label className="form-label">Username</label>
                            <input className="form-control" id="register-username" type="text" name="register-username" placeholder="johndoe" aria-describedby="register-username" />
                        </div>
                        <div className="mb-1">
                            <label className="form-label">Email</label>
                            <input className="form-control" id="register-email" type="text" name="register-email" placeholder="john@example.com" aria-describedby="register-email" />
                        </div>
                        <div className="mb-1">
                            <label className="form-label">Password</label>
                            <div className="input-group input-group-merge form-password-toggle">
                                <input className="form-control form-control-merge" id="register-password" type="password" name="register-password" placeholder="············" aria-describedby="register-password" /><span className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="form-check">
                                <input className="form-check-input" id="register-privacy-policy" type="checkbox" />
                                <label className="form-check-label">I agree to<a href="#">&nbsp;privacy policy & terms</a></label>
                            </div>
                        </div>
                        <button className="btn btn-primary w-100">Sign up</button>
                    </form>
                    <p className="text-center mt-2"><span>Already have an account?</span><a href="auth-login-cover.html"><span>&nbsp;Sign in instead</span></a></p>
                </div>
            </div>
        </AuthLayout>
    )
}
export default SignIn