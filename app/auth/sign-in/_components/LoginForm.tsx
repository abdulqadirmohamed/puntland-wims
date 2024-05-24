'use client'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import logo from '../../../../img/logo-large.png'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from "next-auth/react";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

interface MyFormValues {
    email: string;
    password: string;
}

const initialValues: MyFormValues = {
    email: '',
    password: '',
};
// const validationSchema = Yup.object({
//     email: Yup.string().email('Please enter a valid email')
//         .required('Please enter your email address'),
//     password: Yup.string()
//         .min(8, 'Password must be at least 8 characters long')
//         .required('Please enter your password.'),
// });

const LoginForm = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | undefined>(undefined);
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setFormValues({ email: "", password: "" });

            const res = await signIn("credentials", {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
                callbackUrl,
            });

            if (res?.error) {
                console.log(res.error)
            } else {
                console.log(res)
                setError("invalid email or password");
                router.push(callbackUrl);
                router.refresh()
            }
        } catch (error: any) {
            console.log(error)
            setError(error);
        }
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    return (
        <div className='bg-white px-10 py-20 rounded-md w-[40%] mx-auto flex justify-center items-center my-24'>
            <div>
                {/* Logo */}
                <div>
                    <Image src={logo} alt='puntland logo' height={200} width={300} />
                    <h1 className='my-6 text-[22px] font-semibold'>Water Information Management System</h1>
                </div>
                <div>
                    <span className="text-sm text-red-600">{error}</span>
                </div>
                {/* form */}
                {/* validationSchema={validationSchema} */}
                <Formik
                    initialValues={initialValues}
                    
                    onSubmit={(values, actions) => {
                        console.log(values);
                        // PerFormik any additional actions here
                        actions.setSubmitting(false);
                    }}
                    className="text-left" autoComplete='off'>
                    {({ isSubmitting, isValid, dirty }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="my-5 flex flex-col gap-2 text-lg">
                                <Label htmlFor="email">Email Address <span className='text-red-600'>*</span></Label>
                                <Field
                                    value={formValues.email}
                                    onChange={handleChange}
                                    id="email" name="email" type="email"
                                    className={`py-3 px-4 text-md border-gray-600 border-[1px] rounded-md outline-none`}
                                    placeholder="Enter your email" />
                                <span className='text-red-600 text-sm'><ErrorMessage name="email" /></span>
                            </div>
                            <div className="my-5 flex flex-col gap-2 text-lg">
                                <Label htmlFor="password">Password Address <span className='text-red-600'>*</span></Label>
                                <Field
                                    value={formValues.password}
                                    onChange={handleChange}
                                    id="password" name="password" type="password"
                                    className={`py-3 px-4 text-md border-gray-600  border-[1px] rounded-md outline-none`}
                                    placeholder="Enter your password" />
                                <span className='text-red-600 text-sm'><ErrorMessage name="password" /></span>
                            </div>

                            <div className="flex justify-between text-center text-sm">
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" />
                                    Remember
                                </div>
                                <div className='hover:underline'>
                                    <Link href={'/'}>Forgot your password?</Link>
                                </div>
                            </div>
                            <div className='my-3'>
                                <Button type="submit"  className='w-full bg-[#757FEF] py-6'>Login</Button>
                                {/* <Button type="submit" disabled={!isValid || !dirty || isSubmitting} className='w-full bg-[#757FEF] py-6'>Login</Button> */}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )
}

export default LoginForm