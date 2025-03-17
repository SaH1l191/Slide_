'use server'
import { currentUser } from "@clerk/nextjs/server"
//explicity mention the use server directive just for the server action (compulsroy )
import { onCurrentUser } from "../user"
import { addListener, createAutomation, findAutomation, getAutomations, updateAutomation } from './queries'


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