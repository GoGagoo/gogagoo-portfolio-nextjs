import Link from 'next/link'

const FooterSection = () => {
	return (
		<footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent'>
			<Link 
			className='container items-center p-8 flex justify-between'
			href={"/"}
			>
				<span className='text-4xl sm:text-7xl text-[#ADB7BE] hover:text-white font-semibold hover:-rotate-180 transition duration-1000'>G⅁</span>
				<span className='font-semibold text-1xl sm:text-2xl text-[#ADB7BE] scale-100 rounded-2xl bg-neutral-800 px-2 py-1 hover:text-white transition-transform duration-500 hover:scale-125'>Gagik Antonyan</span>
				<p className='text-slate-600 text-base sm:text-1xl'>{new Date().getFullYear()} ® All Right Reserved</p>
			</Link>
		</footer>
	)
}

export default FooterSection