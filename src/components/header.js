export default function Header() {
    return (
        <header class="bg-black w-full h-[10vh] z-50">
            <div class="h-5"></div>
            <hr class="border-gray-600"/>
                <div class="flex justify-between">
                    <h1 class="my-2 ml-2">SHOT ON DIJIE SHOOTER</h1>
                    <button class="text-sm border border-white rounded-full px-2 my-2 mr-2">BUY NOW</button>
                </div>
            <hr class="border-gray-400"/>
        </header>
    );
}