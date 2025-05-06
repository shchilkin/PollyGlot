const Header = () => {
	return (
		<header
			className="
        relative h-48 flex items-center gap-4 px-6
        /* ↓ background image & behaviour ↓ */
        bg-[url('/polly-nordic-bg.png')] bg-cover bg-center bg-no-repeat
      "
		>
			<div className="absolute inset-0 bg-slate-900/40" />
			<img src="/parrot.png" alt="Logo" className="relative z-10 w-32 h-32" />
			<div className="relative z-10 flex flex-col">
				<h1 className="text-2xl font-bold text-white">PollyGlot</h1>
				<p className="text-polly-cloud">Perfect Translation. Every Time.</p>
			</div>
		</header>
	);
};

export default Header;
