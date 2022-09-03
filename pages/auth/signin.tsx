import AuthLayout from '@components/layouts/auth';
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';

type Props = {};
const SignIn = (props: Props) => {
    const [signInState, setSignInState] = useState<{ user: string; password: string, remember: boolean }>({
        user: '',
        password: '',
        remember: false,
    });

    const handleOnChange = (event: any) => {
        event.preventDefault();
        const target = event.target;
        var value = target.value;
        const name = target.name;
        setSignInState({ ...signInState, [name]: target.type === 'checkbox' ? target.checked : value });
    }

    const handleOnSubmit = (event: any) => {
        event.preventDefault();
        console.log(signInState);
    }

    return (
        <AuthLayout>
            <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <h2 className="card-title fw-bold mb-1">Welcome to Megiservices! 👋</h2>
                    <p className="card-text mb-2">Please sign-in to your account and start the adventure</p>
                    <Form className="auth-login-form mt-2" onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-1">
                            <Form.Label className="form-label">Email or phone number</Form.Label>
                            <Form.Control className="form-control" id="user" type="text" name="user" onChange={handleOnChange} placeholder="Your email or phone number" aria-describedby="login-user" />
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <div className="d-flex justify-content-between">
                                <Form.Label className="form-label">Password</Form.Label><a href="auth-forgot-password-cover.html"><small>Forgot Password?</small></a>
                            </div>
                            <div className="input-group input-group-merge form-password-toggle">
                                <Form.Control className="form-control form-control-merge" id="password" onChange={handleOnChange} type="password" name="password" placeholder="Your password" aria-describedby="login-password" /><span className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Check id="remember" name="remember" type="checkbox" label="Remember Me?" onChange={handleOnChange} />
                        </Form.Group>
                        <Button className="btn btn-primary w-100" type='submit'>Sign in</Button>
                    </Form>
                    <p className="text-center mt-2"><span>New on our platform?</span><a href="auth-register-cover.html"><span>&nbsp;Create an account</span></a></p>
                </div>
            </div>
        </AuthLayout>
    )
}
export default SignIn