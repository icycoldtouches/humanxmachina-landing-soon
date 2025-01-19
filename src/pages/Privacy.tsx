import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4 text-left">
          <h1 className="text-3xl font-bold mb-8 text-primary">Privacy Policy</h1>
          
          <div className="prose prose-slate">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                At humanXmachina, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you voluntarily provide to us, such as your email address when you subscribe to our newsletter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Send you our newsletter and updates about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">4. Data Protection</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;