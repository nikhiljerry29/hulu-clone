import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className='flex flex-col m-5 items-center justify-between h-auto sm:flex-row'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='Home' Icon={HomeIcon} />
                <HeaderItem title='Trending' Icon={LightningBoltIcon} />
                <HeaderItem title='Verified' Icon={BadgeCheckIcon} />
                <HeaderItem title='Collections' Icon={CollectionIcon} />
                <HeaderItem title='Search' Icon={SearchIcon} />
                <HeaderItem title='Account' Icon={UserIcon} />
            </div>
            <Image
                className='object-contain'
                src={"https://links.papareact.com/ua6"}
                height={100}
                width={200}
                alt='Hulu Clone'
            />
        </header>
    );
};

export default Header;
