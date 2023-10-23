import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import NavbarSection from './components/NavbarSection'
import ProjectSection from './components/ProjectSection'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<NavbarSection />
			<div className='container mt-24 mx-auto px-12 py-4'>
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<ContactSection />
			</div>
			<FooterSection />
		</main>
	)
}
