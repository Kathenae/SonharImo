import { useEffect, FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <h1 className='mb-4 text-xl text-center font-thin'>Faça login para continuar</h1>


            <form onSubmit={submit}>
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                <div>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">

                        <div className='flex flex-col'>
                            <div className='flex items-center'>
                                <InputLabel htmlFor="password" value="Senha" />
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="underline text-sm ml-auto text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    >
                                        Esqueceu a senha?
                                    </Link>
                                )}
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                        </div>

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Lembre me</span>
                        </label>
                    </div>

                    <div className="flex flex-col items-center mt-4">
                        <Link
                            href={route('register')}
                            className="underline text-sm ml-auto mb-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Não tem uma conta?
                        </Link>
                        <PrimaryButton className="w-full !text-center font-normal flex items-center justify-center space-x-2" disabled={processing}>
                           <span className='icon-[mdi--email]'></span>
                           <span> Entrar com email</span>
                        </PrimaryButton>
                    </div>
                </div>

                <div className="flex items-center justify-center space-x-4 my-2">
                    <hr className="flex-grow border-gray-300" />
                    <span className="text-gray-500">ou</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <div className='flex flex-col text-lg'>
                    <a href={route('auth.google')} className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white rounded-lg p-2">
                        <span className="icon-[mdi--google]"></span>
                        <span>Entrar com o Google</span>
                    </a>
                </div>
            </form>
        </GuestLayout>
    );
}
