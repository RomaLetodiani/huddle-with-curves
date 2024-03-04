// socials
import facebook from '../../assets/socials/icon-facebook.svg';
import instagram from '../../assets/socials/icon-instagram.svg';
import twitter from '../../assets/socials/icon-twitter.svg';

// Rates
import communities from '../../assets/Rates/communities.svg';
import messages from '../../assets/Rates/message.svg';

// Middle
import grow from '../../assets/images/middle1.svg';
import conv from '../../assets/images/middle2.svg';
import users from '../../assets/images/middle3.svg';

// Footer
import phone from '../../assets/footer/phone.svg';
import gmail from '../../assets/footer/gmail.svg';

export const socials = [
  {
    id: 1,
    icon: facebook,
    alt: 'Facebook',
    link: 'https://www.facebook.com/LetodianiRoma/',
  },
  {
    id: 2,
    icon: twitter,
    alt: 'Twitter',
    link: 'https://twitter.com/l3todianiroma',
  },
  {
    id: 3,
    icon: instagram,
    alt: 'Instagram',
    link: 'https://www.instagram.com/roma.letodiani',
  },
];

export const Rates = [
  {
    id: 1,
    icon: communities,
    alt: 'Community',
    title: '1.4K+',
    desc: 'Communities Formed',
  },
  {
    id: 2,
    icon: messages,
    alt: 'Message',
    title: '2.7M+',
    desc: 'Messages Sent',
  },
];

export const middle = [
  {
    id: 1,
    title: 'Grow Together',
    image: grow,
    alt: 'Work together',
    desc: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
  },

  {
    id: 2,
    title: 'Flowing Conversations',
    image: conv,
    alt: 'Collaborate Everywhere',
    desc: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  },

  {
    id: 3,
    title: 'Your Users',
    image: users,
    alt: 'Engagement',
    desc: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
  },
];

export const footer = {
  left: {
    desc: "Discover Huddle's sleek landing page with curved sections, guiding you through seamless collaboration solutions.",
    icons: [
      {
        text: 'Phone: +1-543-123-4967',
        icon: phone,
        alt: 'Phone',
      },
      {
        text: 'example@example.com',
        icon: gmail,
        alt: 'Email',
      },
    ],
  },
  right: {
    title: 'Newsletter',
    desc: "To receive tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address",
  },
};
