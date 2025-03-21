import { StepperCheckIcon } from "/public/icons/Icons";
import "./check.css"

const data = ["Meal Elements", "Details", "Instructions", "Post"];
const Stepper=({step})=> {
    return (
        <div className="flex flex-col items-center mt-14">
            <div className="flex items-center justify-center w-[70%] text-xs sm:text-sm md:text-lg">
                {data.map((el, index) => (
                    <div key={index} className={`flex items-center ${index < data.length - 1 ? "w-full" : ""}`}>
                    <div className={`p-1 sm:p-1.5 transition flex items-center justify-center rounded-full text-white font-semibold ${index <= step ? "delay-400 duration-500" : ""} ${index <= step ? "bg-black" : "bg-gray-300"}`} >
                        <div className={`h-2 w-2 flex items-center justify-center relative`}>
                            <p className={`whitespace-nowrap transition ${index <= step ? "delay-400 duration-500" : ""} absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 sm:-translate-y-8 md:-translate-y-9 ${index <= step ? "text-black" : "text-gray-300"}`}>{el}</p>
                            <p className="text-white text-sm">{index < step ? <StepperCheckIcon state="checkmark active" className="w-4 sm:w-5"/> : ""}</p>
                            <p className={`h-2 w-2 bg-white rounded-full text-sm ${index <= step ? "delay-400 duration-200 ease-[cubic-bezier(0.175, 0.9, 0.32, 1.275)]" : ""} ${index == step ? "scale-100" : "scale-0"}`}></p>
                        </div>
                    </div>          
                    {index < data.length - 1 && (
                        <div className={`h-1 bg-gray-300 ${index < data.length - 1 ? "w-full" : ""}`}>
                            <div className={`w-full h-1 bg-black transition duration-500 origin-bottom-left ease-in-out ${index < step ? "scale-x-100" : "scale-x-0"}`} />
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Stepper;






































