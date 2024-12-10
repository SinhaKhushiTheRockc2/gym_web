import {
  calculator,
  customer1,
  customer2,
  dumbbell,
  laptop,
  saladBowl,
} from "../assets/images";

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQs" },
  { href: "#diet", label: "Diet Plans" },
  { href: "#workout", label: "Workout Plans" },
  { href: "#blog", label: "Blog" },
  { href: "#contactus", label: "Contact Us" },
];

export const features = [
  {
    id: 1,
    imgURL: laptop,
    name: "Effortless Workout Logging",
    content:
      "Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision.",
  },
  {
    id: 2,
    imgURL: dumbbell,
    name: "Accurate Rep Counting",
    content:
      "Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance.",
  },
  {
    id: 3,
    imgURL: calculator,
    name: "Calorie Calculation Made Easy",
    content:
      "Calculate calories burned during your workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated.",
  },
  {
    id: 4,
    imgURL: saladBowl,
    name: "Personalized Diet Plan",
    content:
      "An AI diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const steps = [
  {
    id: 1,
    label: "Step 1: Click on Get Started",
    subtext:
      "Start by opening the GymFluencer. The intuitive home screen gives you quick access to all features.",
  },
  {
    id: 2,
    label: "Step 2: Log Your Exercises",
    subtext:
      "Easily log your exercises by selecting from a wide range of activities. Track your progress with detailed logs.",
  },
  {
    id: 3,
    label: "Step 3: Count Your Reps",
    subtext:
      "Count your reps with precision, ensuring every detail is logged. Stay informed on your progess.",
  },
  {
    id: 4,
    label: "Step 4: Track Your Progress",
    subtext:
      "Review your workout stats and progress over time to stay motivated and reach your fitness goals.",
  },
  {
    id: 5,
    label: "Step 5: Reivew Your Progress",
    subtext:
      "Check Your workout summarise and progress over time to stay motivated and achieve your goals.",
  },
];
