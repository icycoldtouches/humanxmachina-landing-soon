import { CookieConsent } from "@/components/CookieConsent";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

      <footer className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 humanXmachina. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-secondary">Privacy Policy</a>
              <a href="/terms" className="hover:text-secondary">Terms of Service</a>
              <a href="mailto:contact@humanxmachina.com" className="hover:text-secondary">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
};

export default Index;