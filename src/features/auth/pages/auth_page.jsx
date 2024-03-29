
import Spacer from '@/core/components/spacer';
import { handleGoogleSignIn } from '@/core/firebase/auth';
import { useState } from 'react';
import google_icon from '../../../assets/icons/ic_google_log.png';
import CapitaltechLogo from "../../../assets/images/capitallogo.png";
import InputField from '../components/input_field';
const AuthPage = () => {
    const [loading, setloading] = useState(false)

    const signInWithGoogle = async () => {
        setloading(true);
        console.log('inside login');
        try {
            const user = await handleGoogleSignIn();
            console.log(user);
            if (user != null) {
                console.log('user logged in');
                window.location = '/onboarding'
            }
        } catch (error) {
            console.log(error);
        }
        setloading(false);
    }


    return (
        <div className="gr-pg md:flex justify-center">
            <div className="w-full md:w-1/2 md:sticky md:top-0 p-4">
                <img src={CapitaltechLogo} className='object-cover h-20' />
            </div>

            {/* login */}
            <div className="w-full h-screen md:w-1/2 md:bg-white px-6 py-4 md:p-12 overflow-y-auto">
                <p className="text-3xl font-open-sans mb-12">Welcome to
                    <span className="text-yellow-400"> Capital Tech </span>!!
                </p>
                <p className="text-white md:text-gray-500 text-lg mb-6">Login to your account</p>
                <InputField hint={'Name'} label={'Name'} />
                <InputField hint={'Email'} label={'Email'} />
                <InputField hint={'Password'} label={'Password'} />
                <InputField hint={'Confirm Password'} label={'Confirm Password'} />
                <Spacer height={10} />
                <button className='btn' onClick={() => alert('Currently we dont support mannual registration please try using google sign')} >
                    Login
                </button>
                <Spacer height={10} />

                {/* sign up button */}
                {/* <p>Already a member?
                    <span
                        className='font-semibold text-blue-500 cursor-pointer'>Login</span>
                </p> */}

                {/* google login */}
                <div className='w-full justify-center flex flex-col items-center'>
                    <Spacer height={20} />
                    <p>Or</p>
                    <Spacer height={10} />
                    <div
                        onClick={signInWithGoogle}
                        className='w-max flex bg-blue-500 p-1 rounded-none  font-normal justify-center items-center gap-3 text-base font-fira-sans text-white tap'>
                        <img src={google_icon} className='bg-white p-1' width={32} />
                        <span className='p-2'>Sign in With Google</span>
                    </div>
                </div>

                <Spacer height={30} />
            </div>
        </div>
    )
}

export default AuthPage;