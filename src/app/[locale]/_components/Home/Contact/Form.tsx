import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <form className="container max-w-3xl py-8 space-y-6">
      <div className="flex flex-wrap -mx-5">
        <div className="w-full md:w-1/2 px-5 mb-4 space-y-2">
          <Label className="bg-primary/5" htmlFor="name">
            Name
          </Label>
          <Input
            className="bg-primary/5"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-5 mb-4 space-y-2">
          <Label className="bg-primary/5" htmlFor="email">
            Email
          </Label>
          <Input
            className="bg-primary/5"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-5">
        <div className="w-full md:w-1/2 px-5 mb-4 space-y-2">
          <Label htmlFor="mobileNumber">Mobile Number</Label>
          <Input
            className="bg-primary/5"
            type="number"
            id="mobileNumber"
            name="mobileNumber"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-5 mb-4 space-y-2">
          <Label htmlFor="headOffice">Head Office</Label>
          <Input
            className="bg-primary/5"
            type="text"
            id="headOffice"
            name="headOffice"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          className="bg-primary/5"
          id="message"
          name="message"
          required
        />
      </div>
    </form>
  );
}
