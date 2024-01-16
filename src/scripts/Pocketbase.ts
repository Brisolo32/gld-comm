import Pocketbase from "pocketbase"
import { writable } from "svelte/store"

export const pb = new Pocketbase("https://hardly-noon.pockethost.io/")
export const authStore = writable(pb.authStore)

export const register = async ({email, password, username}: {email: string, password: string, username: string}) => {
    // create user
    const model = {
        username: username,
        email: email,
        emailVisibility: true,
        password: password,
        passwordConfirm: password, // sla pra q isso
    }
    
    await pb.collection("users").create(model)

    // login
    await pb.collection("users").authWithPassword(email, password)

    authStore.set(pb.authStore)
}

export const login = async ({email, password}: {email: string, password: string}) => {
    await pb.collection("users").authWithPassword(email, password)
    authStore.set(pb.authStore)
}

export const logout = async () => {
    pb.authStore.clear()
    authStore.set(pb.authStore)
    location.href = "/"
}

export const updateSettings = async (
    {username, email, desc, pfp}: 
    {username: string, email: string, desc: string, pfp: string}
) => {
    const data = {
        username: pb.authStore.model?.username,
        email: email,
        emailVisibility: true,
        displayName: username,
        description: desc,
        avatar: pfp
    }

    await pb.collection("users").update(pb.authStore.model?.id!, data)
}