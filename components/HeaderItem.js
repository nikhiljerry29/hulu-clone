import Link from "next/link";

const HeaderItem = ({ Icon, title, url }) => {
    return (
        <Link href={url}>
            <a className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white '>
                <Icon className='h-8 mb-1 group-hover:animate-bounce' />
                <p className='opacity-0 tracking-widest uppercase group-hover:opacity-100'>
                    {title}
                </p>
            </a>
        </Link>
    );
};

HeaderItem.defaultProps = {
    url: "/",
};

export default HeaderItem;
