import { create } from 'zustand';

type Appointment = {
  name: string;
  location: string;
  date: string;
  time: string;
  profilePic: string;
};

type AppointmentStore = {
  selectedAppointment: Appointment | null;
  setSelectedAppointment: (appointment: Appointment) => void;
};

const useAppointmentStore = create<AppointmentStore>((set) => ({
  selectedAppointment: null,
  setSelectedAppointment: (appointment) => set({ selectedAppointment: appointment }),
}));

export default useAppointmentStore;
