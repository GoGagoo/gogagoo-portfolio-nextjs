import Image from 'next/image'
import Link from 'next/link'

import GitHubIcon from '../../../public/github-icon.svg'
import LinkedInIcon from '../../../public/linkedin-icon.svg'
import TelegramIcon from '../../../public/telegram-icon.svg'
import InstagramIcon from '../../../public/instagram-icon.svg'
import EmailIcon from '../../../public/email-icon.svg'

const ContactSection = () => {
	return (
		<section
			id='contact'
			className='relative grid my-12 md:my-12 justify-center items-center py-24 gap-4'
		>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500 to-transparent absolute top-3/4 right-2 -translate-x-1/2 translate-y-1/2 rounded-full h-10 w-10 z-0 blur-lg'></div>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500 to-transparent absolute top-3/4 -left-4 -translate-x-1/2 -translate-y-1/2 rounded-full h-80 w-80 z-0 blur-lg'></div>
			<div className='z-10'>
				<h2 className='text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12'>
					Let&apos;s Connect
				</h2>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
					{' '}
					I am currently on the lookout for new opportunities, you are welcome
					to contact me. If you have a question or just want to say hi, I will
					do my best to answer you!
				</p>
				<div className='socials flex flex-row justify-around items-center gap-2'>
					<Link 
					href='https://github.com/GoGagoo' 
					target='_blank'
					className="scale-100 rounded-2xl px-2 py-1 text-neutral-50 transition-transform duration-500 hover:scale-125"
					>
						<Image src={GitHubIcon} alt='GitHub Icon' />
					</Link>
					<Link
						href='https://www.linkedin.com/in/gagikantonyan/'
						target='_blank'
					 	className="scale-100 rounded-2xl px-2 py-1 text-neutral-50 transition-transform duration-500 hover:scale-125"
					>
						<Image src={LinkedInIcon} alt='LinkedIn Icon' />
					</Link>
					<Link
						href='https://t.me/gago_json'
						target='_blank'
						className="scale-100 rounded-2xl px-2 py-1 text-neutral-50 transition-transform duration-500 hover:scale-125"
					>
						<Image src={TelegramIcon} alt='Telegram Icon' />
					</Link>
					<Link
						href='https://www.instagram.com/gago_chad/'
						target='_blank'
						className="scale-100 rounded-2xl px-2 py-1 text-neutral-50 transition-transform duration-500 hover:scale-125"
					>
						<Image src={InstagramIcon} alt='Instagram Icon' />
					</Link>
					<Link
						href='mailto:gagika57gmail@.&body=привет'
						target='_blank'
						className="scale-100 rounded-2xl px-2 py-1 text-neutral-50 transition-transform duration-500 hover:scale-125"
					>
						<Image src={EmailIcon} alt='Instagram Icon' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
