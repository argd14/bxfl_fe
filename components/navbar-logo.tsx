import { Image } from 'antd'

import { IMAGES } from "@/lib/constants";

export const NavbarLogo = () => {
    return (
        <>
            <Image
                src={IMAGES.NAV_LOGO}
                alt="Logo"
            />
        </>
    );
}