const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>Welcome to humanXmachina. We respect your privacy and are committed to protecting your personal data.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
            <p>When you subscribe to our newsletter, we collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email address</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
            <p>We use your email address to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Send you updates about our launch</li>
              <li>Communicate important announcements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Storage</h2>
            <p>Your data is stored securely using industry-standard encryption and security measures.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;