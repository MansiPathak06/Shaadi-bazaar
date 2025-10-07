import React from 'react'

const Button = () => {
    return (
        <div className='flex justify-center py-12'>
            <button
                className="group relative px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:scale-105"
            >
                {/* Button text */}
                <span className="relative z-10 flex items-center gap-2">
                    View More Products
                    <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </span>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

        </div>
    )
}

export default Button