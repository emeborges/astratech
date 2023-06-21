import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { UsersI } from "../utils/types";
import axios from "axios";
import { toast } from "react-toastify";

interface providerProps {
  children: ReactNode;
}

interface contextProps {
  users: UsersI[];
  handleSearchUsers: () => Promise<void>;
  handleDeleteUser: (id: number, name: string) => void;
}

export const UsersContext = createContext({} as contextProps);

export function UserProvider({ children }: providerProps) {
  const [users, setUsers ] = useState<UsersI[] >([])

  useEffect(() => {
    const usersStorage = localStorage.getItem("user");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const listaUsers = JSON.parse(usersStorage!);

    setUsers(listaUsers);
  }, []);

  const setData = (data:UsersI[]) => {
    setUsers(data);
    localStorage.setItem("user", JSON.stringify(data));
  }

  const handleSearchUsers = async () => {
    const get = await axios.get("https://jsonplaceholder.typicode.com/users");

    setData(get.data)
  };

  const handleDeleteUser = (id: number, name: string) => {
    const newUsers = users.filter(user => {
      if(user.id == id){
        return 
      }

      return user
    })

    setData(newUsers)
    toast.success(`Você excluiu o usuário ${name} com sucesso`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  
  return (
    <UsersContext.Provider
      value={{
        users,
        handleSearchUsers,
        handleDeleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
