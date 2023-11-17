import styles from "@/app/ui/users/users.module.css";
import { fetchUsers } from "../lib/data";
import Link from "next/link";
import { deleteUser } from "../lib/actions";

const UsersPage = async () => {
  const users = await fetchUsers();

  return (
    <div>
      <div className={styles.title}>
        <h1>Liste des utilisateurs</h1>
        <Link href="/users/add">
          Ajouter un nouvel utilisateur
        </Link>
      </div>
      <div>
        {users.length !== 0 &&
          users.map((user) => (
            <div key={user.username}>
              <div className={styles.title}>
                <h2>Nom d'utilisateur : {user.username}</h2>
                <div className={styles.actions}>
                  <Link href={`/users/${user.id}/update`}>
                    <button>
                        Éditer l'utilisateur
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} required />
                    <button>
                      Supprimer l'utilisateur
                    </button>
                  </form>
                </div>
              </div>            
              <ul>
                <li>Email : {user.email}</li>
                <li>Téléphone : {user.phone}</li>
                <li>Rôle : {user.isAdmin ? "administrateur" : "utilisateur"}</li>
                <li>Actif : {user.isActive ? "actif" : "inactif"}</li>
              </ul>
            </div>
          ))}
        {users.length === 0 && "Aucun utilisateur en base"}
      </div>
    </div>
  );
};

export default UsersPage;
