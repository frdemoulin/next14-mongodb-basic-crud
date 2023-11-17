"use server";
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
    // on récupère les données postées dans le formulaire
    const { username, password, email, phone, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        connectToDB();
        // on crée le nouvel utilisateur dans MongoDB
        const newUser = new User({ username, password, email, phone, isAdmin, isActive });
        await newUser.save();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create user");
    }

    revalidatePath("/users");
    redirect("/users");
}

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user");
    }
  
    revalidatePath("/users");
    redirect("/users");
  };

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        // on supprime l'utilisateur dans MongoDB
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete user");
    }

    revalidatePath("/users");
}