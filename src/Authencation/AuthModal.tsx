import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { signupUser } from "../Services/authService";
import { X, Mail, Lock, Loader2, User} from 'lucide-react';
interface AuthModalProps {
    mode: 'login' | 'signup'
}

interface FormData {
    fullname: string;
    email: string;
    password: string;
}
export default function AuthModal({ mode } : AuthModalProps) {
    const navigate = useNavigate();
    const handleClose = ()=> navigate('/')

    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState<FormData>({
        fullname: "",
        email: "",
        password: ""
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)  

        const result = await signupUser(formData)

        if(!result.success) {
            console.error("signup failed:", result.fullError)
            setIsLoading(false)
            return
        }

        console.log('signup success!', result?.fullData)
        setIsLoading(false)
    }
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6">
            {/*Backdrop with blur and fade animation */}
            <div className="fixed inset-0 bg-primary/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={handleClose}
            aria-hidden="true"
            />
            {/*Model container*/}
            <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all animate-in zoom-in-95 duration-300">
                {/*Close Buttonr */}
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:ring-2 focus:ring-slate-200"
                >
                    <X size={20}/>
                </button>

                <div className="p-8">
                    {/*Header*/}
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                            {mode === 'login' ? 'Welcome Back': 'Create an Account'}
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">
                            {mode === 'login'
                            ? 'Enter your credentials to access your account'
                            : 'Join our community and start building today.'    
                        }
                        </p>
                    </div>

                    {/*social authentication button*/}
                    {/* Social Auth Buttons */}
                    {/* <div className="grid grid-cols-2 gap-3 mb-6">
                        <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 active:scale-[0.98]">
                            <Chrome size={18} /> Google
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 active:scale-[0.98]">
                            <Github size={18} /> GitHub
                        </button>
                    </div> */}

                         {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-500">Or continue with</span></div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 text-black">
                        {mode === 'signup' && (
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-700">
                                    Full Name
                                </label>
                                <div className="relative">
                                     <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size={18}"/>
                                     <input 
                                        type="text"
                                        name="fullname"
                                        placeholder="John Doe"
                                        onChange={handleChange}
                                        value={formData.fullname}
                                        className="w-full rounded-lg border border-slate-200 py-2 pl-10 pr-4 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                        required
                                        />
                                </div>
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size={18}"/>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border text-secondary border-slate-200 py-2 pl-10 pr-4 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between">
                                    <label className="text-sm font-medium text-slate-700">Password</label>
                                        {mode === 'login' && <button type="button" className="text-sm text-blue-600 hover:underline">Forgot?</button>}
                                </div>
                            <div className="relative">
                                <Lock className="absolute top-1/2 -translate-y-1/2 left-3  text-slate-400"/>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                    placeholder="••••••••"
                                    minLength={8}
                                    pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                                    className="w-full rounded-lg border text-secondary border-slate-200 py-2  pl-10 pr-4 outline-none transiton-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                    // required
                                    />
                            </div>
                        </div>
                         <button
                            disabled={isLoading}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 font-semibold text-white transiton-all hover:bg-blue-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isLoading ? <Loader2 className="animate-spin" size={20} /> : (mode === 'login' ? 'Sign In' : 'Create Account')}
                        </button>
                    </form>
                     {/* Footer */}
                    <p className="mt-6 text-center text-sm text-slate-600">
                        {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button 
                            onClick={() => navigate(mode === 'login' ? '/signup' : '/login')}
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            {mode === 'login' ? 'Sign up' : 'Log in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}