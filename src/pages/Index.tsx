import { CookieConsent } from "@/components/CookieConsent";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-primary animate-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              humanXmachina
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600">
              Crafting the future of human-AI collaboration
            </p>
          </div>

          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-secondary to-transparent" />

          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Our website is currently under construction. Sign up to be notified when we launch.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;