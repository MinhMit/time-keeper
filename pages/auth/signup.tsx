import AuthLayout from '@components/layouts/auth';
import { Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUp } from '@models/index';
import * as yup from "yup";

type Props = {};
const SignIn = (props: Props) => {
    const schema = yup.object({
        displayName: yup.string().required("Đây là trường bắt buộc"),
        user: yup.string().required("Đây là trường bắt buộc"),
        password: yup.string().required("Đây là trường bắt buộc").min(8, "Mật khẩu không được nhỏ hơn 8 ký tự"),
        verifyPassword: yup.string().oneOf([yup.ref('password'), null], 'Mật khẩu không trùng khớp'),
        agreeTAS: yup.boolean().isTrue("Bạn cần đồng ý với điều khoản sử dụng")
    });

    const { register, handleSubmit, formState: { errors } } = useForm<ISignUp>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (payload: ISignUp) => {
        console.log(payload);
    }

    return (
        <AuthLayout>
            <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <h2 className="card-title fw-bold mb-1">Adventure starts here 🚀</h2>
                    <p className="card-text mb-2">Make your app management easy and fun!</p>
                    <Form onSubmit={handleSubmit(onSubmit)} className="auth-register-form mt-2" action="index.html" method="POST">
                        <Form.Group className="mb-1">
                            <Form.Label className="form-label">Display name</Form.Label>
                            <Form.Control className="form-control" {...register("displayName")} id="display-name" type="text" placeholder="Your display name" />
                            <p>{errors.displayName?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label className="form-label">Email or phone number</Form.Label>
                            <Form.Control className="form-control" id="user" {...register("user")} type="text" placeholder="Your email or phone number" />
                            <p>{errors.user?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label className="form-label">Password</Form.Label>
                            <div className="input-group input-group-merge form-password-toggle">
                                <Form.Control className="form-control form-control-merge" {...register("password")} id="password" type="password" placeholder="Your password" /><span className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                            </div>
                            <p>{errors.password?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label className="form-label">Verify Password</Form.Label>
                            <div className="input-group input-group-merge form-password-toggle">
                                <Form.Control className="form-control form-control-merge" {...register("verifyPassword")} id="verify-password" type="password" placeholder="Verify your password" /><span className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                            </div>
                            <p>{errors.verifyPassword?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Check id="agree-terms-service" type="checkbox" {...register("agreeTAS")} label={(<>I agree to the <a href="/terms-of-service">terms of service</a></>)} />
                            <p>{errors.agreeTAS?.message}</p>
                        </Form.Group>
                        <Button className="btn btn-primary w-100" type="submit">Sign up</Button>
                    </Form>
                    <p className="text-center mt-2"><span>Already have an account?</span><a href="auth-login-cover.html"><span>&nbsp;Sign in instead</span></a></p>
                </div>
            </div>
        </AuthLayout>
    )
}
export default SignIn