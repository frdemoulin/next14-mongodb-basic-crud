import styles from "@/app/ui/users/add-user/add-user.module.css";
import { updateUser } from "@/app/lib/actions";
import Link from "next/link";
import { fetchUser } from "@/app/lib/data";

const UpdateUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Mise à jour d'un utilisateur</h1>
        <Link href="/users">
          Retour à la liste des utilisateurs
        </Link>
      </div>
        
        <form action={updateUser} className={styles.form}>
            <input type="hidden" name="id" value={user.id} required />
            <input type="text" placeholder={user.username} name="username" />
            <input type="password" placeholder={user.password} name="password" />
            <input type="email" placeholder={user.email} name="email" />
            <input type="phone" placeholder={user.phone} name="phone" />
            <select name="isAdmin" id="isAdmin" defaultValue={user.isAdmin}>
                <option value={false}>Administrateur ?</option>
                <option value={true}>Oui</option>
                <option value={false}>Non</option>
            </select>
            <select name="isActive" id="isActive" defaultValue={user.isActive}>
                <option value={false}>Actif ?</option>
                <option value={true}>Oui</option>
                <option value={false}>Non</option>
            </select>
            <button type="submit">Mettre à jour</button>
        </form>
    </div>
  )
}

export default UpdateUserPage;