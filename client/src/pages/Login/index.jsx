import assets from '../../assets'
import { Star } from 'lucide-react'
import { SignIn } from '@clerk/react'

const Login = () => {

    return (
        <div className="relative min-h-screen flex flex-col md:flex-row">

            {/* Background Image */}
            <img
                src={assets.bgImage}
                alt=""
                className="absolute inset-0 -z-10 w-full h-full object-cover"
            />

            {/* Left side: Branding */}
            <div className="relative z-10 flex-1 flex flex-col items-start p-6 md:p-10 lg:pl-40">

                {/* Logo */}
                <img
                  src={assets.logo}
                  alt="Orbit Logo"
                  className="h-12 object-contain"
                />

                {/* Branding Content */}
                <div className="mt-20 md:mt-25 max-w-xl">

                    {/* Stats */}
                    <div className="flex items-center gap-3 mb-6">

                        <img
                          src={assets.group_users}
                          alt="Group of users"
                          className="h-8 md:h-12"
                        />

                        <div>

                            {/* Stars */}
                            <div className="flex">
                              {Array(5).fill(0).map((_, i) => (
                                <Star
                                  key={i}
                                  className="size-4 md:size-[18px] text-transparent fill-amber-500"
                                />
                              ))}
                            </div>

                            <p className="text-sm md:text-base">
                              Used by 10M+ people
                            </p>

                        </div>

                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl md:pb-3 font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent">
                      It's Your Orbit<span className="block">Every Connection Has a Story</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-indigo-900 max-w-72 md:max-w-md">
                      Meet new people, share your journey, and build connections that matter.
                    </p>

                </div>
                <span className='md:h-10'></span>
            </div>

            {/* Right side: Login Form */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
                <SignIn />
            </div>
        </div>
    )
}

export default Login;