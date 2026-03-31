import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Listings from '@/components/Listings';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Communities from '@/components/Communities';
import Services from '@/components/Services';
import Guides from '@/components/Guides';
import Press from '@/components/Press';
import Videos from '@/components/Videos';
import App from '@/components/App';
import Magazine from '@/components/Magazine';
import FriendsClub from '@/components/FriendsClub';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Philanthropy from '@/components/Philanthropy';
import SocialMedia from '@/components/SocialMedia';
import ContactForm from '@/components/ContactForm';
import Offices from '@/components/Offices';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* 1. Navigation Bar */}
      <Navbar />
      {/* 2. Hero */}
      <Hero />
      {/* 3. Listings */}
      <Listings />
      {/* 4. About / Founder Spotlight */}
      <About />
      {/* 5. Stats / Why Choose Us */}
      <Stats />
      {/* 6. Communities / Areas Served */}
      <Communities />
      {/* 7. Navigation / CTA — Offers & Services */}
      <Services />
      {/* 8. Guides (example) */}
      <Guides />
      {/* 9. Press / Media (example) */}
      <Press />
      {/* 10. Featured Videos (example) */}
      <Videos />
      {/* 11. App Spotlight (example) */}
      <App />
      {/* 12. Magazine Spotlight (example) */}
      <Magazine />
      {/* 13. Custom Services — Friends & Family Club */}
      <FriendsClub />
      {/* 14. Testimonials */}
      <Testimonials />
      {/* 15. Blog */}
      <Blog />
      {/* 16. Philanthropy */}
      <Philanthropy />
      {/* 17. Social Media (example) */}
      <SocialMedia />
      {/* 18. CTA Form */}
      <ContactForm />
      {/* 19. Office Locations (example) */}
      <Offices />
      {/* 20. Newsletter CTA */}
      <Newsletter />
      {/* 21. Footer */}
      <Footer />
    </main>
  );
}
