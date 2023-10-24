import NavbarSection from './components/NavbarSection'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

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
