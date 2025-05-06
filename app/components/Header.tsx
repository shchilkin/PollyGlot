const Header = () => {
    return (
//         <header className="flex flex-row items-center justify-center text-white bg-gray-900 w-full h-48 text-white p-4 bg-[radial-gradient(circle_at_25%_25%,#F5FAFD_0%,#E7EEF4_40%,white_100%)]
// ">
<header className="bg-polly-midnight px-6 py-4 h-48 flex items-center gap-4">
            <img src="/parrot.png" alt="Logo" className="w-32 h-32" />
            <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl text-white font-bold">PollyGlot</h1>
            <p className="text-polly-cloud">Perfect Translation. Every Time.</p>
            </div>
        </header>   
    )
}

export default Header;