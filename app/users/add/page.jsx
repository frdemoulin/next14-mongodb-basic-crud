import styles from "@/app/ui/users/add-user/add-user.module.css";
import { addUser } from "@/app/lib/actions";
import Link from "next/link";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Ajout d'un utilisateur</h1>
        <Link href="/users">Retour à la liste des utilisateurs</Link>
      </div>

      <form action={addUser} className={styles.form}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          required
        />
        <input type="email" placeholder="Email" name="email" required />
        <input type="phone" placeholder="Téléphone" name="phone" />
        <select name="isAdmin" id="isAdmin" defaultValue={false}>
          <option value={false}>Administrateur ?</option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <select name="isActive" id="isActive" defaultValue={true}>
          <option value={true}>Actif ?</option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default AddUserPage;
