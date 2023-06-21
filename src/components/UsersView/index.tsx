import { useUsers } from "../../context/UsersContext";
import { UserTable } from "../UserTable";
import './style.css'


export const UserView = () => {
    const { handleSearchUsers } = useUsers();

    return (
      <div className="container">
        <button className="fetchBtn" onClick={() => handleSearchUsers()}>Fetch users</button>
        <UserTable />
      </div>
    );
}