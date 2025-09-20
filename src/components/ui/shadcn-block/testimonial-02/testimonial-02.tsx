import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "University Music Student",
    company: "TechCorp",
    testimonial:
      "This app gave me instant feedback on every piece I practiced. I improved my accuracy and confidence faster than I ever could with just classroom lessons.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Hobbyist Pianist",
    company: "InsightTech",
    testimonial:
      "I don’t have time for formal lessons, but the AI analysis keeps me on track. It’s like having a teacher available 24/7.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "Preparing for auditions was stressful until I used this tool. The side-by-side comparison with reference recordings helped me refine every detail.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Music Teacher",
    company: "BrandBoost",
    testimonial:
      "I recommend this app to my students. It reinforces what I teach in lessons and helps them practice smarter at home.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Beginner Adult Learner",
    company: "CodeCrafters",
    testimonial:
      "The best investment I've made! The support team is also super responsive and helpful.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "High School Pianist",
    company: "InnovateX",
    testimonial:
      "The tempo and rhythm feedback were game changers. It helped me prepare for competitions with precision.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial02 = () => (
  <div className="min-h-screen flex justify-center items-center py-12 px-6">
    <div>
      <h2 className="mb-14 text-[60px] md:text-6xl font-semibold text-center tracking-[-0.03em]">
        Testimonials
      </h2>
      <div className="max-w-(--breakpoint-xl) mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 rounded-xl p-6 break-inside-avoid shadow-[0px_0px_16px_0px_rgba(0,0,0,0.1)] bg-accent-foreground"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg text-black font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5 text-black text-[17px]">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);


export default Testimonial02;
