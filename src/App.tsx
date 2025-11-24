import { lazy, Suspense } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Lazy load components for better performance
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

// Loading component
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
)

function App() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Animated background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 gradient-animated opacity-30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
            </div>

            <Navigation />

            <main>
                <Hero />

                <Suspense fallback={<LoadingSpinner />}>
                    <Projects />
                </Suspense>

                <Suspense fallback={<LoadingSpinner />}>
                    <About />
                </Suspense>

                <Suspense fallback={<LoadingSpinner />}>
                    <Contact />
                </Suspense>
            </main>

            <Footer />
        </div>
    )
}

export default App
