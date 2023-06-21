import { useUsers } from "../../context/UsersContext";
import './style.css'

export const UserTable = () => {
    const { users, handleDeleteUser } = useUsers();

    return (
      <table>
        <thead>
            <tr className="headerTable">
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th className="removeConteiner"></th>
            </tr>
        </thead>
        {users &&
          users.map((user) => {
            return (
              <tr className="userLine">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id, user.name)}>
                    x
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    );
};
