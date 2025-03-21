import React, { useEffect, useState } from "react";
import Profile from "/public/images/Profile.png";
import { SignalIcon, HeartIcon, TimeIcon, DotsIcon } from "/public/icons/Icons";

const PopularCard = ({ data }) => {
    const [status, setStatus] = useState("");

    useEffect(() => {
        data.duration > 5
            ? setStatus("hard")
            : data.duration > 3
                ? setStatus("medium")
                : setStatus("easy");
    }, [data.duration]);

    const calculateDaysDifference = () => {
        const today = new Date(data.date);
        const target = new Date();
        const differenceInMs = target - today;
        const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
        return differenceInDays;
    };

    return (
        <div className='w-full bg-soft relative custom-shadow rounded-xl overflow-hidden my-2 max-h-[80vh] md:max-h-[80vh]'>
            <img src={data.image} alt={data.image} className=' w-full' />
            <div className="bg-white rounded-full p-1 absolute top-3 right-3">
                <HeartIcon className="w-6 h-6" />
            </div>
            <div className='backdrop-brightness-50 absolute rounded-b-xl bottom-0 w-full'>
                <div className="absolute -top-10 text-sm left-3 bg-30 flexy rounded-full p-1 gap-1">
                    <TimeIcon className="w-6 h-6" />
                    {data.duration} min
                </div>
                <div
                    className={`absolute -top-10 text-sm right-3 bg-30 flexy rounded-full py-1 px-1 pt-0.5 ${status === "hard"
                        ? "text-red-500"
                        : status === "medium"
                            ? "text-orange-500"
                            : "text-green-500"
                        }`}
                >
                    <div className="flexy px-1">
                        <SignalIcon size="size-5.5 pb-0.5" />
                        <p>{status}</p>
                    </div>
                </div>

                <div className="w-full h-full p-1 px-2 md:gap-5 md:p-4 text-white pb-0 max-md:pb-4 flex flex-col justify-center whitespace-nowrap overflow-hidden text-ellipsis">
                    <div className="flex flex-col md:gap-2">
                        <div className="flexy justify-between!">
                            <h3 className="font-bold text-xl md:text-4xl">{data.title}</h3>
                            <DotsIcon className="w-6 h-6" />
                        </div>
                        <div className="text-sm flexy justify-start! gap-1 md:text-base">
                            {data.views} views
                            <div className="h-1.5 w-1.5 rounded-full bg-white m-0.5"></div>
                            {calculateDaysDifference()} days ago
                        </div>
                    </div>
                    <div className="flexy justify-start! gap-2">
                        <img
                            src={Profile}
                            alt=""
                            className="rounded-full w-8 object-cover md:w-12"
                        />
                        <h6 className="md:text-2xl">{data.user}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularCard;
