import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fishData } from "@/data/fishData";
import { CheckCircle, Send } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  email: z.string().email("Please enter a valid email address").max(255),
  market: z.string().min(2, "Please specify your market/location").max(100),
  fishSelection: z.string().min(1, "Please select at least one fish type"),
  quantity: z.string().min(5, "Please provide quantity requirements").max(500),
  deliveryDate: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Enquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      market: "",
      fishSelection: "",
      quantity: "",
      deliveryDate: "",
      notes: "",
    },
  });
  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);

      const formData = new FormData();

      formData.append("type", "quote");
      formData.append("name", values.name);
      formData.append("company", values.company);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("market", values.market);
      formData.append("fishSelection", values.fishSelection);
      formData.append("quantity", values.quantity);
      formData.append("deliveryDate", values.deliveryDate || "");
      formData.append("notes", values.notes || "");

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzVgE87L0JjYTBCl8O_tLAlt9dSVAb9oDqa_EIi3nbfM2A_uaka5JGmp0SrJ-eWhdgLDA/exec",
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Quote request submitted!");
        setIsSubmitted(true);
        form.reset();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to submit enquiry");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 py-16">
        <Card className="max-w-2xl w-full mx-4">
          <CardContent className="pt-12 pb-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Thank You!</h2>
              <p className="text-lg text-muted-foreground">
                Your enquiry has been received successfully.
              </p>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground max-w-md mx-auto">
              <p>
                Our team will review your requirements and get back to you
                within 24 hours with pricing, availability, and delivery
                options.
              </p>
              <p>
                If you have an urgent request, please call us directly at +1
                (555) 123-4567.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button onClick={() => setIsSubmitted(false)}>
                Submit Another Enquiry
              </Button>
              <Button variant="outline" asChild>
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Request a Quote
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Fill out the form below and we'll get back to you within 24 hours
            with pricing and availability.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Enquiry Form</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us prepare
                  an accurate quote for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Contact Information
                      </h3>

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Company Ltd."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+1 (555) 123-4567"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@company.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="market"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Market / Location *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="City, State/Region"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Order Details */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="text-lg font-semibold">
                        Order Requirements
                      </h3>

                      <FormField
                        control={form.control}
                        name="fishSelection"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Fish Selection *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select fish type(s)" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {fishData.map((fish) => (
                                  <SelectItem
                                    key={fish.id}
                                    value={fish.shortCode}
                                  >
                                    {fish.name} ({fish.shortCode})
                                  </SelectItem>
                                ))}
                                <SelectItem value="multiple">
                                  Multiple Types (specify in notes)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Approx. Quantity / Requirements *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="e.g., 50kg of salmon fillets, 30kg of prawns..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="deliveryDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Delivery Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any special requirements, recurring order information, or additional details..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="h-5 w-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Enquiry
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by RS
                      Fisheries regarding your enquiry.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
