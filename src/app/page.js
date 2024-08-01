import ColorButton from '../components/colorButton';
import ProductInfo from '../components/productInfo';
import SupportInfo from '../components/supportInfo';

export default function Home() {
    return (
        <div>
            <img class="relative" src="/images/landing2.jpg" alt="landing1" />
            <p class="text-blueAccent text-center font-bold mt-10 mb-5">NEW</p>
            <h1 class="text-5xl text-center">dijie shooter</h1>
            
            <div class="h-10"></div>
            <hr class="border-gray-600"/>

            <p class="text-sm text-gray-400 p-3">START TAKING DIJIES</p>

            {/* <hr /> */}
            <div class="flex items-center justify-between p-3 pt-0">
                <p>SELECT COLOR</p>
                <div class="flex items-center">
                    <ColorButton />
                </div>
            </div>
            <button className="w-[98vw] mb-5 mx-1 px-2 text-black font-bold bg-blueAccent active:bg-white">
                <div className="flex items-center justify-between">
                    <p>BUY NOW</p>
                    <p>$195</p>
                </div>
                
            </button>

            <ProductInfo />

            <SupportInfo />
            <div className="h-16"/>
        </div>
    );
}
