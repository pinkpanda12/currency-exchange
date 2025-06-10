import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Email sent successfully!");
        setFormData({ fullName: "", mobileNumber: "", email: "" });
      } else {
        setStatus(`Failed to send email: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending email. Please try again later.");
    }
  };

  return (
    <section id="request-form" className={cn("py-16 md:py-20")}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-india-dark">
                Ready to Exchange Your Old Currency?
              </h2>
              <p className="mt-3 text-xl text-gray-600">
                Fill out the form and our experts will guide you through the entire process.
              </p>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    {step}
                  </div>
                  <p className="text-gray-700">
                    {[
                      "Submit your request with basic details",
                      "Our team will verify and contact you",
                      "Complete the exchange process securely",
                    ][index]}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-600">
                <strong>Note:</strong> We follow all legal procedures and guidelines set by RBI for currency exchange.
                The process is completely secure and legitimate.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-india-dark">Exchange Request Form</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobileNumber">Mobile Number</Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Enter your 10-digit mobile number"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email ID</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-india-saffron hover:bg-orange-600 text-white py-6"
                    disabled={status === "Sending..."}
                  >
                    {status === "Sending..." ? "Processing..." : "Submit Your Request"}
                  </Button>
                </div>

                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>

                {status && (
                  <p className="text-sm text-center mt-2 text-blue-600 font-medium">{status}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
