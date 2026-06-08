import Image from "next/image";
import { ChevronDown, Quote, Star } from "lucide-react";
import { faqs, testimonials } from "../lib/data";

export function FaqTestimonials() {
  return (
    <section className="bg-surface-container-low py-stack-lg">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-stack-lg lg:grid-cols-2">
          <div className="text-right">
            <h2 className="font-headline mb-8 text-headline-lg-mobile text-on-surface md:text-headline-lg">
              الأسئلة الشائعة
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group clinical-shadow rounded-xl border border-slate-100 bg-white transition-all open:border-primary"
                >
                  <summary className="flex cursor-pointer list-none flex-row-reverse items-center justify-between p-5 text-label-md">
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    <span>{faq.question}</span>
                  </summary>
                  <div className="px-5 pb-5 text-body-md text-on-surface-variant">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="text-right">
            <h2 className="font-headline mb-8 text-headline-lg-mobile text-on-surface md:text-headline-lg">
              ماذا يقول مرضانا
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="clinical-shadow relative rounded-xl border border-slate-100 bg-white p-6"
                >
                  <Quote className="absolute top-6 left-6 h-16 w-16 text-primary/10" />
                  <div className="mb-4 flex flex-row-reverse items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                      <Image
                        src={testimonial.image}
                        alt="المستخدم"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-label-md">{testimonial.name}</h4>
                      <div className="flex flex-row-reverse text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="relative z-10 text-body-md text-on-surface-variant italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
