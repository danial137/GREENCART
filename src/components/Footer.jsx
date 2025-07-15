import { assets, footerLinks } from "../assets/assets"

const Footer = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">

                {/* لوگو و توضیح */}
                <div className="max-w-full md:max-w-[410px]">
                    <img className="w-32 md:w-32" src={assets.logo} alt="logo" />
                    <p className="mt-6 text-sm md:text-base leading-relaxed">
                        We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
                    </p>
                </div>

                {/* لینک‌ها */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-between w-full md:w-[55%] gap-6">
                    {footerLinks.map((section, index) => (
                        <div key={index} className="min-w-[120px]">
                            <h3 className="font-semibold text-base text-gray-900 mb-3">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>

            {/* کپی‌رایت */}
            <p className="py-4 text-center text-xs md:text-sm text-gray-500">
                Copyright {new Date().getFullYear()} © <a href="https://t.me/prsian_store" className="hover:underline">PersianStore.dev</a> All Right Reserved.
            </p>
        </div>
    )
}

export default Footer
