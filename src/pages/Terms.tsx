const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily access the materials on humanXmachina's website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p>The materials on humanXmachina's website are provided on an 'as is' basis. humanXmachina makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p>In no event shall humanXmachina or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on humanXmachina's website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Revisions</h2>
            <p>The materials appearing on humanXmachina's website could include technical, typographical, or photographic errors. humanXmachina does not warrant that any of the materials on its website are accurate, complete or current.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Terms;