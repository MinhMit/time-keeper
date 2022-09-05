import AuthLayout from '@components/layouts/auth';
import { Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignIn } from '@models/index';
import * as yup from "yup";

type Props = {};
const SignIn = (props: Props) => {
    const schema = yup.object({
        user: yup.string().required("Đây là trường bắt buộc"),
        password: yup.string().required("Đây là trường bắt buộc").min(8, "Mật khẩu không được nhỏ hơn 8 ký tự"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<ISignIn>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (payload: ISignIn) => {
        console.log(payload);
    }

    return (
        <AuthLayout>
            <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <h2 className="card-title fw-bold mb-1">Welcome to Megiservices! 👋</h2>
                    <p className="card-text mb-2">Please sign-in to your account and start the adventure</p>
                    <Form className="auth-login-form mt-2" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-1">
                            <Form.Label className="form-label">Email or phone number</Form.Label>
                            <Form.Control className="form-control" id="user" {...register("user")} type="text" placeholder="Your email or phone number" aria-describedby="login-user" />
                            <p>{errors.user?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <div className="d-flex justify-content-between">
                                <Form.Label className="form-label">Password</Form.Label><a href="auth-forgot-password-cover.html"><small>Forgot Password?</small></a>
                            </div>
                            <div className="input-group input-group-merge form-password-toggle">
                                <Form.Control className="form-control form-control-merge" {...register("password")} id="password" type="password" placeholder="Your password" aria-describedby="login-password" /><span className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                            </div>
                            <p>{errors.password?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Check id="remember" {...register("remember")} type="checkbox" label="Remember Me?" />
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