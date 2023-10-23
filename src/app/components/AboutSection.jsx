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
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/about-image.jpg'
					width={500}
					height={500}
					alt='about'
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
					<p className='text-base lg:text-lg'>
						Hi, I&apos;m an beginner Front-end developer building web
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
						<div class='w-10 h-10 z-0 border-t-[50px] border-t-transparent border-r-[100px] border-r-primary-500 border-b-[50px] border-b-transparent to-transparent blur-lg top-3/4 right-2 translate-x-1/2 translate-y-4/8'></div>
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
