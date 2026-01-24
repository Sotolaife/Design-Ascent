"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { registerForClass } from "@/app/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/app/config";

// Add global type for ttq if not exists or ignore for now, 
// strictly speaking we should just use window as any or extend Window interface.
declare global {
  interface Window {
    ttq: any;
  }
}

interface ErrorState {
  name?: string[];
  email?: string[];
  phone?: string[];
}

const initialState = {
  message: "",
  errors: {} as ErrorState,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      size="lg"
      disabled={pending}
    >
      {pending ? "Securing Your Spot..." : "Join the Free Class"}
    </Button>
  );
}

export default function RegistrationSection() {
  const [state, formAction] = useActionState(registerForClass, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });

        // TikTok Event Tracking
        if (window.ttq) {
          window.ttq.track('CompleteRegistration', {
            content_name: 'Brand Design Masterclass',
            value: 0, // Since it is a free class
            currency: 'USD',
          });
        }

        // Redirect to WhatsApp
        window.location.href = WHATSAPP_URL;

      } else if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          title: "Oops! Something went wrong.",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="register" className="py-12 sm:py-16 lg:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold">
                Reserve Your Spot — It’s 100% Free
              </CardTitle>
              <CardDescription className="text-lg">
                Limited slots available — secure yours now to unlock your
                creative potential.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="e.g. John Doe"
                    required
                  />
                  {state.errors.name && (
                    <p className="text-sm text-destructive">
                      {state.errors.name[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                  {state.errors.email && (
                    <p className="text-sm text-destructive">
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                  />
                  {state.errors.phone && (
                    <p className="text-sm text-destructive">
                      {state.errors.phone[0]}
                    </p>
                  )}
                </div>

                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
