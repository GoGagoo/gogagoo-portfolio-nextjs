import Link from 'next/link'

const FooterSection = () => {
	return (
		<footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent'>
			<Link 
			className='container items-center p-8 flex justify-between'
			href={"/"}
			>
				<span className='text-7xl text-[#ADB7BE] hover:text-white font-semibold hover:-rotate-180 transition duration-1000'>G⅁</span>
				<p className='text-slate-600'>® All Right Reserved</p>
			</Link>
		</footer>
	)
}

export default FooterSection