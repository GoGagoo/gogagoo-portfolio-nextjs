import Image from 'next/image'
import Link from 'next/link'

import GitHubIcon from '../../../public/github-icon.svg'
import LinkedInIcon from '../../../public/linkedin-icon.svg'

const ContactSection = () => {
	return (
		<section
			id='contact'
			className='relative grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'
		>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500 to-transparent absolute top-3/4 -left-4 -translate-x-1/2 -translate-y-1/2 rounded-full h-80 w-80 z-0 blur-lg'></div>
			<div className='z-10'>
				<h5 className='text-xl font-bold text-white my-2'>
					Let&apos;s Connect
				</h5>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
					{' '}
					I am currently on the lookout for new opportunities, you are welcome
					to contact me. If you have a question or just want to say hi, I will
					do my best to answer you!
				</p>
				<div className='socials flex flex-row gap-2'>
					<Link href='https://github.com/GoGagoo' target='_blank'>
						<Image src={GitHubIcon} alt='GitHub Icon' />
					</Link>
					<Link
						href='https://www.linkedin.com/in/gagikantonyan/'
						target='_blank'
					>
						<Image src={LinkedInIcon} alt='LinkedIn Icon' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
