'use client'

import Image from 'next/image'
import { useState } from 'react'

import TabButton from './TabButton'

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className='list-disc pl-2 ml-4'>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>React.js</li>
				<li>Typescript</li>
				<li>MongoDB</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className='list-disc pl-2 ml-4'>
				<li>Polzunov Ural State College, Ekaterinburg, Russia</li>
				<li>Yeltsin Ural Federal University, Ekaterinburg, Russia</li>
			</ul>
		),
	},
]

const AboutSection = () => {
	const [tab, setTab] = useState('skills')
	const [isPending, startTransition] = useState()

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id)
		})
	}

	return (
		<section className='text-white sm:' id='about'>
			<div className='w-10 h-10 z-0 border-t-[50px] border-t-transparent border-r-[100px] border-r-primary-500 border-b-[50px] border-b-transparent to-transparent blur-lg top-3/4 right-2 translate-x-1/2 translate-y-4/8'></div>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/about-image.png'
					className="bg-[linear-gradient(135deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_100%,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_100%,0_0] hover:duration-[1500ms] w-full"
					width={500}
					height={500}
					alt='about'
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
					<p className='text-base lg:text-lg'>
						I&apos;m an beginner Front-end developer building web
						applications. My goal is to improve user experience and I am
						constantly improving my skills. I have experience working with
						JavaScript, React.js, Typescript, MongoDB, HTML, CSS, and Git. I am
						open for cooperation and new projects.
					</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}
						>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}
						>
							{' '}
							Education{' '}
						</TabButton>
					</div>
					<div className='mt-8'>
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
