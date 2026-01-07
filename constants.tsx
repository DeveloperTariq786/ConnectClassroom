import { TuitionCenter, Category, CarouselSlide } from './types';
import { BookOpen, GraduationCap, Microscope, Calculator, Briefcase, Landmark, PenTool } from 'lucide-react';

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: "Your Local Tuition, Now Online",
    subtitle: "Discover trusted coaching centers near you and stay connected from home.",
    imageUrl: "https://picsum.photos/id/10/1920/1080" // Nature/forest often doubles as calm background, but let's try to simulate 'place'
  },
  {
    id: 2,
    title: "Offline Classes. Online Access.",
    subtitle: "Registered tuitions share notes, videos, and updates with students digitally.",
    imageUrl: "https://picsum.photos/id/20/1920/1080" // Desk/Work
  },
  {
    id: 3,
    title: "Find the Right Coaching for Every Exam",
    subtitle: "School, NEET, JEE, CUET, UPSC & more.",
    imageUrl: "https://picsum.photos/id/24/1920/1080" // Books
  }
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Class 6-10', iconName: 'BookOpen', count: '120+ Centers' },
  { id: '2', name: 'Class 11-12', iconName: 'PenTool', count: '85+ Centers' },
  { id: '3', name: 'NEET Coaching', iconName: 'Microscope', count: '45+ Centers' },
  { id: '4', name: 'JEE Coaching', iconName: 'Calculator', count: '50+ Centers' },
  { id: '5', name: 'UPSC / JKPSC', iconName: 'Landmark', count: '30+ Centers' },
  { id: '6', name: 'SSC / Banking', iconName: 'Briefcase', count: '60+ Centers' },
  { id: '7', name: 'CUET Prep', iconName: 'GraduationCap', count: '40+ Centers' },
];

export const FEATURED_TUITIONS: TuitionCenter[] = [
  {
    id: 't1',
    name: "Elite Science Academy",
    location: "Koramangala, Bangalore",
    rating: 4.8,
    reviewCount: 124,
    exams: ["JEE", "NEET", "Class 12"],
    imageUrl: "https://picsum.photos/seed/tuition1/600/400",
    mode: "Offline + Home Access",
    isVerified: true,
    description: "Elite Science Academy has been a pioneer in science education for over 15 years. We focus on concept clarity and application-based learning to help students crack competitive exams like JEE and NEET. Our hybrid model ensures students never miss a class, with all lectures available online 24/7.",
    address: "#45, 3rd Cross, 5th Block, Koramangala, Bangalore - 560034",
    highlights: ["AC Classrooms", "Digital Library Access", "Weekly Mock Tests", "1:1 Mentorship"],
    courses: [
      { id: 'c1', name: 'Two Year Integrated JEE Program', duration: '2 Years', description: 'Comprehensive coaching for Class 11 & 12 + JEE Mains & Advanced.' },
      { id: 'c2', name: 'NEET Repeater Batch', duration: '1 Year', description: 'Intensive coaching for dropper students targeting top medical colleges.' },
      { id: 'c3', name: 'Class 12 Board Booster', duration: '6 Months', description: 'Focused preparation for CBSE/ICSE board exams.' }
    ],
    faculty: [
      { id: 'f1', name: 'Dr. R.K. Sharma', qualification: 'Ph.D. Physics (IIT Delhi)', subject: 'Physics', imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { id: 'f2', name: 'Mrs. Anjali Gupta', qualification: 'M.Sc. Chemistry', subject: 'Chemistry', imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg' }
    ],
    reviews: [
      { id: 'r1', user: 'Rahul Verma', rating: 5, comment: 'Best institute for Physics. Sharma sir is amazing!', date: '2 weeks ago' },
      { id: 'r2', user: 'Sneha P.', rating: 4, comment: 'Great facilities and study material. Tests are tough but helpful.', date: '1 month ago' }
    ]
  },
  {
    id: 't2',
    name: "Success Point Institute",
    location: "Laxmi Nagar, Delhi",
    rating: 4.5,
    reviewCount: 89,
    exams: ["SSC", "Banking", "Railways"],
    imageUrl: "https://picsum.photos/seed/tuition2/600/400",
    mode: "Offline",
    description: "Success Point is the leading institute in Delhi for government job preparation. With a specialized focus on SSC CGL, Banking PO, and Railway exams, we have helped thousands of students secure their dream jobs.",
    address: "Plot 12, Metro Station Road, Laxmi Nagar, Delhi - 110092",
    highlights: ["Speed Test Labs", "Updated Current Affairs", "Interview Guidance"],
    courses: [
        { id: 'c1', name: 'SSC CGL Foundation', duration: '8 Months', description: 'Maths, Reasoning, English and GS covering Tier 1 and Tier 2.' },
        { id: 'c2', name: 'Bank PO Target Batch', duration: '4 Months', description: 'Fast track course for IBPS and SBI PO.' }
    ],
    faculty: [
        { id: 'f1', name: 'Mr. V. Singh', qualification: 'Ex-Bank PO', subject: 'Reasoning', imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg' }
    ],
    reviews: []
  },
  {
    id: 't3',
    name: "Sharma Mathematics Circle",
    location: "Andheri West, Mumbai",
    rating: 4.9,
    reviewCount: 210,
    exams: ["Class 10", "Class 12", "Foundation"],
    imageUrl: "https://picsum.photos/seed/tuition3/600/400",
    mode: "Offline + Home Access",
    isVerified: true,
    description: "Specialized coaching for Mathematics for school students. We simplify complex concepts and remove the fear of math.",
    address: "B-202, Crystal Plaza, Link Road, Andheri West, Mumbai",
    highlights: ["Small Batch Size", "Personal Attention", "Home Assignments App"],
    courses: [
        { id: 'c1', name: 'Class 10 Math Mastery', duration: '1 Year', description: 'Full syllabus coverage with 10 years past papers.' }
    ],
    faculty: [],
    reviews: []
  },
  {
    id: 't4',
    name: "Civil Services Marg",
    location: "Mukherjee Nagar, Delhi",
    rating: 4.7,
    reviewCount: 156,
    exams: ["UPSC", "State PSC"],
    imageUrl: "https://picsum.photos/seed/tuition4/600/400",
    mode: "Offline + Home Access",
    description: "Your path to the civil services. Experienced mentors and rigorous answer writing practice.",
    highlights: ["Answer Writing Analysis", "Current Affairs Magazine", "Library"],
    courses: [],
    faculty: [],
    reviews: []
  },
  {
    id: 't5',
    name: "Apex Medical Academy",
    location: "Anna Nagar, Chennai",
    rating: 4.6,
    reviewCount: 92,
    exams: ["NEET", "Foundation"],
    imageUrl: "https://picsum.photos/seed/tuition5/600/400",
    mode: "Offline",
    isVerified: true,
    description: "Premier institute for medical entrance exams in Chennai.",
    highlights: ["Daily Biology Drills", "NCERT Focus"],
    courses: [],
    faculty: [],
    reviews: []
  },
  {
    id: 't6',
    name: "Global Commerce Classes",
    location: "Salt Lake, Kolkata",
    rating: 4.4,
    reviewCount: 78,
    exams: ["CA Foundation", "Class 11-12"],
    imageUrl: "https://picsum.photos/seed/tuition6/600/400",
    mode: "Offline + Home Access",
    description: "Accounts and Economics experts for commerce students.",
    highlights: ["CA Faculty", "Practical Case Studies"],
    courses: [],
    faculty: [],
    reviews: []
  }
];