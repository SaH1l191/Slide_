"use server"

import { client } from "@/lib/prisma"

export const findUser = async (clerkId: string) => {
    return await client.user.findUnique({
        where: {
            clerkId
        },
        include: {
            subscription: true,
            integrations: {
                select: {
                    id: true,
                    token: true,
                    expiresAt: true,
                    name: true
                }
            }

        }
    })
}
export const createUser = async (
    clerkId: string,
    firstname: string | null,
    lastname: string,
    email: string
) => {

    const defaultFirstname = firstname || email.split('@')[0];
    return client.user.create({
        data: {
            clerkId,
            firstname: defaultFirstname,
            lastname,
            email,
            subscription: {
                create: {}
            }
        },
        select: {
            firstname: true, lastname: true
        }
    })

}

export const updateSubscription = async (clerkId: string,
    props: { customerId?: string; plan?: 'PRO' | 'FREE' }
) => {
    return await client.user.update({
        where: {
            clerkId
        },
        data: {
            subscription: {
                update: {
                    data: {
                        ...props
                    }
                }
            }
        }
    })
}