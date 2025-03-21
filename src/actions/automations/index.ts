'use server'
import { currentUser } from "@clerk/nextjs/server"
//explicity mention the use server directive just for the server action (compulsroy )
import { onCurrentUser } from "../user"
import { addKeyWord, addListener, addPost, addTrigger, createAutomation, deleteKeywoord, findAutomation, findUser, getAutomations, updateAutomation } from './queries'



export const createAutomations = async (id?: string) => {
    const user = await onCurrentUser()
    try {
        const create = await createAutomation(user.id, id)
        // console.log("logging create from usemuttaiondata",create)
        if (create) return {
            status: 200, data: 'Automation created successfully'
            , res: create
        }
        return { status: 404, data: 'Oops! something went wrong' }
    }
    catch (error) {
        return { status: 500, data: 'Internal server error' }
    }
}

export const getAllAutomations = async () => {
    const user = await onCurrentUser()
    try {
        // console.log("allautomations fnc got called ")
        const automations = await getAutomations(user.id)
        if (automations) return { status: 200, data: automations.automations }
        return { status: 404, data: [] }
    }
    catch (error) {
        return { status: 500, data: [] }
    }
}

export const getAutomationInfo = async (id: string) => {
    await onCurrentUser()
    try {
        const automation = await findAutomation(id)
        if (automation) {
            return { status: 200, data: automation }
        }
        return { status: 404 }
    }
    catch (error) {
        return { status: 500 }
    }
}

export const updateAutomationName = async (
    automationId: string,
    data: {
        name?: string,
        active?: boolean,
        automation?: string
    }
) => {
    await onCurrentUser()
    try {
        const update = await updateAutomation(automationId, data);
        if (update) {
            return { status: 200, data: 'Automation updated successfully' }
        }
        return { status: 400, data: 'Something went wrong' }
    }
    catch (error) {
        return { status: 500, data: 'Internal server error' }
    }
}


export const saveListener = async (
    automationId: string,
    listener: 'AI' | 'MESSAGE',
    prompt: string,
    reply?: string
) => {
    await currentUser()
    try {
        const create = await addListener(automationId, listener, prompt, reply)
        if (create) {
            return { status: 200, data: 'Listener added successfully' }
        }
        return { status: 404, data: 'Cant save Listener' }
    }
    catch (error) {
        return { status: 500, data: 'Internal server error' }
    }
}

export const saveTrigger = async (automationId: string, trigger: string[]) => {
    await currentUser()
    try {
        const create = await addTrigger(automationId, trigger)
        if (create) return { status: 200, data: 'Trigger added successfully' }
        if (!create) return { staus: 404, data: 'Cant save Trigger' }

    }
    catch (error) {

    }

}

export const saveKeyword = async (automationId: string, keyword: string) => {
    await currentUser()
    try {
        const create = await addKeyWord(automationId, keyword)
        if (create) return { status: 200, data: 'Keyword added successfully' }
        return { status: 404, data: 'Cannot add this keyword' }
    }
    catch (error) {
        return { status: 500, data: 'Internal server error' }
    }
}

export const deleteKeyword = async (id: string) => {
    await currentUser()
    try {
        const deleted = await deleteKeywoord(id)
        if (deleted) return { status: 200, data: 'Keyword deleted successfully' }
        if (!deleted) return { staus: 404, data: 'Keyword not found' }


    }
    catch (error) {
        return { status: 500, data: 'Internal server error' }
    }
}



export const getProfilePosts = async () => {
    const user = await onCurrentUser()
    try {
        const profile = await findUser(user.id)
        const posts = await fetch(`${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`)
        const parsed = await posts.json()
        if (parsed) return { status: 200, data: parsed }
        console.log('Error in getting posts')
        return { status: 401 }
    }
    catch (error) {
        console.log("Server Side Error in  getting  posts", error)
        return { status: 500 }
    }
}



export const savePosts = async (
    autmationId: string,
    posts: {
        postid: string
        caption?: string
        media: string
        mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
    }[]
) => {
    await onCurrentUser()
    try {
        const create = await addPost(autmationId, posts)

        if (create) return { status: 200, data: 'Posts attached' }

        return { status: 404, data: 'Automation not found' }
    } catch (error) {
        return { status: 500, data: 'Oops! something went wrong' }
    }
}


export const activateAutomation = async (id: string, state: boolean) => {
    await currentUser()
    try {
        const update = await updateAutomation(id, { active: state })
        if (update) {
            return {
                status: 200,
                data: `Automation ${state ? 'activated' : 'deactivated'}`
            }
        }
        return { status: 404, data: 'Oops! something went wrong' }

    }
    catch (error) {
        return { status: 500, data: "Internal server error" }

    }
}