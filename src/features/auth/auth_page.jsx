
import Spacer from '@/core/components/spacer';
import { useState } from 'react';
import InputField from './components/input_field';
const AuthPage = () => {
    const [pageType, setpageType] = useState('login');
    return (
        <div className="gr-pg md:flex justify-center">
            <div className="w-full md:w-1/2 sticky top-0 ">jgh</div>
            <div className="w-full h-screen md:w-1/2 bg-white p-4 md:p-12 overflow-y-auto">
                <p className="text-3xl font-open-sans mb-12">Welcome to
                    <span className="text-yellow-400"> Capital Tech </span>!!
                </p>
                <p className="text-gray-500 text-lg mb-6">Register your account !</p>
                <InputField hint={'Name'} label={'Name'} />
                <InputField hint={'Email'} label={'Email'} />
                <InputField hint={'Password'} label={'Password'} />
                <InputField hint={'Confirm Password'} label={'Confirm Password'} />
                <Spacer height={10} />
                <button className='btn'>
                    Sign Up
                </button>
                <Spacer height={10} />

                {/* sign up button */}
                <p>Already a member?
                    <span className='font-semibold text-blue-500 cursor-pointer'>Login</span>
                </p>

            </div>
        </div>
    )
}

export default AuthPage;