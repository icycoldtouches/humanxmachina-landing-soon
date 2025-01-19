import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { email }
      });

      if (error) {
        // Check if the error response contains a message
        const errorBody = error.message && error.message.includes('{') 
          ? JSON.parse(error.message)
          : null;
        
        if (errorBody?.code === 'duplicate_parameter') {
          toast.success("Oops, thank you for wanting to be on our list so eagerly but you already subscribed! 😊");
        } else if (errorBody?.message) {
          toast.error(errorBody.message);
        } else {
          toast.error("Failed to subscribe. Please try again later.");
        }
        console.error('Newsletter subscription error details:', error);
        return;
      }

      toast.success("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Subscribing..." : "Notify Me"}
      </Button>
    </form>
  );
};