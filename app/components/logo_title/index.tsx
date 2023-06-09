import {Image} from "expo-image";
import * as React from "react";

function LogoTitle()  {
    return (
        <Image
            style={{ width: 120, height: 45, aspectRatio: 120 / 45}}
            source={"https://www.chrishyland.com/host/fullLogo.png"}
        />
    );
}

export default LogoTitle