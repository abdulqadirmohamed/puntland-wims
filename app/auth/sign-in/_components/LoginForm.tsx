'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../../img/logo-large.png'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

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
const validationSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Required'),
});
const LoginForm = () => {

    return (
        <div className='bg-white px-10 py-20 rounded-md w-[40%] mx-auto flex justify-center items-center my-24'>
            <div>
                {/* Logo */}
                <div>
                    <Image src={logo} alt='puntland logo' height={200} width={300} />
                    <h1 className='my-6 text-[22px] font-semibold'>Water Information Management System</h1>
                </div>
                {/* form */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        // PerFormik any additional actions here
                        actions.setSubmitting(false);
                    }}
                    className="text-left" autoComplete='off'>
                    {({ isSubmitting,isValid, dirty }) => (
                        <Form>
                            <div className="my-5 flex flex-col gap-2 text-lg">
                                <Label htmlFor="email">Email Address <span className='text-red-600'>*</span></Label>
                                <Field
                                    id="email" name="email" type="email"
                                    className='py-3 px-4 text-md border-gray-600 border-[1px] rounded-md outline-none'
                                    placeholder="Enter your email" />
                                <span className='text-red-600'><ErrorMessage name="email" /></span>
                            </div>
                            <div className="my-5 flex flex-col gap-2 text-lg">
                                <Label htmlFor="password">Password Address <span className='text-red-600'>*</span></Label>
                                <Field
                                    id="password" name="password" type="password"
                                    className='py-3 px-4 text-md border-gray-600 border-[1px] rounded-md outline-none'
                                    placeholder="Enter your password" />
                                <span className='text-red-600'><ErrorMessage name="password" /></span>
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
                                <Button type="submit" disabled={!isValid || !dirty || isSubmitting} className='w-full bg-[#757FEF] py-6'>Login</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )
}

export default LoginForm