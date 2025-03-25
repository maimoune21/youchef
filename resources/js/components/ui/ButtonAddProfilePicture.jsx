import React from "react";
import { UploadIcon } from "../../../../public/icons/Icons";

const ButtonAddProfilePicture = () => {
    return (
        <div>
            <label htmlFor="file" className="flexy gap-2 cursor-pointer button">
                <span>
                    <UploadIcon />
                </span>
                <p>Change Picture</p>
            </label>
            <input className="input hidden" name="text" id="file" type="file" />
        </div>
    );
};

export default ButtonAddProfilePicture;
