// link as param
export default function BuyNow({ link, className }) {
    return (
        <div>
            <button onClick={() => window.location.href=link}
                    className={` ${"w-[98vw] mb-5 mx-1 px-2 text-black font-bold bg-blueAccent active:bg-white"} ${className}`}>
                <div className="flex items-center justify-between">
                    <p>BUY NOW</p>
                    <p>$195</p>
                </div>
            </button>
        </div>
    )
}