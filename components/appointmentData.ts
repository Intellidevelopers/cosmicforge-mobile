export type AppointmentType = 'Upcoming' | 'Past' | 'Canceled';

export const appointmentData: Record<AppointmentType, Array<{
  id: string;
  name: string;
  location: string;
  date: string;
  time: string;
  profilePic: string;
  status: string;
}>> = {
  Upcoming: [
    {
      id: '1',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/16.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
    {
      id: '2',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/15.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
    {
      id: '3',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/20.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
    {
      id: '4',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/16.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
    {
      id: '5',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/16.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
    {
      id: '6',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/16.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
    {
      id: '7',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/16.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
    {
      id: '8',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/16.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
    {
      id: '9',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/16.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
    {
      id: '10',
      name: 'Grace Williams',
      location: 'Lagos, Nigeria',
      date: '9th Dec 2024',
      time: '12:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/16.jpg', // Replace with actual image URL
      status: 'Upcoming',
    },
  ],
  Past: [
    {
      id: '2',
      name: 'John Doe',
      location: 'Abuja, Nigeria',
      date: '8th Dec 2024',
      time: '11:00 AM',
      profilePic: 'https://randomuser.me/api/portraits/men/19.jpg', // Replace with actual image URL
      status: 'Past',
    },
  ],
  Canceled: [
    {
      id: '3',
      name: 'Jane Smith',
      location: 'Port Harcourt, Nigeria',
      date: '7th Dec 2024',
      time: '2:00 PM',
      profilePic: 'https://randomuser.me/api/portraits/women/20.jpg', // Replace with actual image URL
      status: 'Canceled',
    },
  ],
};
