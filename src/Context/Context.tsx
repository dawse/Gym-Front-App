import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

// Define the UserInfo type
interface UserInfo {
  age?: number;
  bodyType?: string;
  goal?: string;
  levelOfFat?: number;
  height?: number;
  weight?: number;
  targetWeight?: number;
  nbrTraningHours?: number;
  levelOfFitness?: string;
}

// Define the UserContextType
interface UserContextType {
  userInfo: UserInfo;
  updateUser: (user: Partial<UserInfo>) => void;
  postUser: () => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Component provider
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  const updateUser = (user: Partial<UserInfo>) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      ...user,
    }));
  };

  const postUser = async () => {
    try {
      // Log the data being sent
      console.log('Posting user:', userInfo);

      // Ensure that the payload matches what the server expects
      const response = await axios.post<UserInfo>('http://localhost:8081/add', userInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('User posted:', response.data);
      // Reset the user info after successful post
      setUserInfo({});
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error posting user:', error);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUser, postUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the UserContext
export const useUsers = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};
