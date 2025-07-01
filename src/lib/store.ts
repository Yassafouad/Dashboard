import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  isDarkMode: boolean;
  isSidebarOpen: boolean;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  initializeSidebar: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      isSidebarOpen: false,
      toggleDarkMode: () => {
        try {
          set((state) => ({ isDarkMode: !state.isDarkMode }));
        } catch (error) {
          console.error('Error toggling dark mode:', error);
        }
      },
      toggleSidebar: () => {
        try {
          set((state) => ({ isSidebarOpen: !state.isSidebarOpen }));
        } catch (error) {
          console.error('Error toggling sidebar:', error);
        }
      },
      setSidebarOpen: (open) => {
        try {
          set({ isSidebarOpen: open });
        } catch (error) {
          console.error('Error setting sidebar state:', error);
        }
      },
      initializeSidebar: () => {
        try {
          if (typeof window !== 'undefined') {
            const isLargeScreen = window.innerWidth >= 1024;
            set({ isSidebarOpen: isLargeScreen });
          }
        } catch (error) {
          console.error('Error initializing sidebar:', error);
        }
      },
    }),
    {
      name: 'ui-storage',
    }
  )
);

interface NotificationState {
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
  }>;
  addNotification: (notification: Omit<NotificationState['notifications'][0], 'id'>) => void;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { ...notification, id: Date.now().toString() },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
})); 