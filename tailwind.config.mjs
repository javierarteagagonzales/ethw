/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
    theme: {
        extend: {
            colors: {
                bg: {
                    0: "#05060A",
                    1: "#0B0D14",
                    2: "#101324"
                }
            },
            boxShadow: {
                soft: "0 12px 40px rgba(0,0,0,.25)"
            }
        }
    },
    plugins: []
};