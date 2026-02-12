import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Subjects } from './components/Subjects';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Subjects />
      <Benefits />
      <Footer />
    </div>
  );
}
