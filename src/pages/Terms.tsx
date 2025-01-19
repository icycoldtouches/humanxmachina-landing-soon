import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4 text-left">
          <h1 className="text-3xl font-bold mb-8 text-primary">Terms of Service</h1>
          
          <div className="prose prose-slate">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using humanXmachina's website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily access the materials on humanXmachina's website for personal, non-commercial use only.
              </p>
              <p className="text-gray-600 mb-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by humanXmachina at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">3. Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                The materials on humanXmachina's website are provided on an 'as is' basis. humanXmachina makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">4. Limitations</h2>
              <p className="text-gray-600 mb-4">
                In no event shall humanXmachina or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on humanXmachina's website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Revisions</h2>
              <p className="text-gray-600 mb-4">
                The materials appearing on humanXmachina's website could include technical, typographical, or photographic errors. humanXmachina does not warrant that any of the materials on its website are accurate, complete, or current. humanXmachina may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;