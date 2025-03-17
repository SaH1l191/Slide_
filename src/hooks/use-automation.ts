import { createAutomations, saveListener, updateAutomationName } from "@/actions/automations"
import { useMutationData } from "./use-mutation-data"
import { MutationKey, useMutationState } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react"
import { z } from 'zod'
import useZodForm from "./user-zod-form"


export const useCreateAutomation = (id?: string) => {
  const { isPending, mutate } = useMutationData(
    ['create-automation'],
    () => createAutomations(id),
    'user-automations'
  )

  return { isPending, mutate }
}


export const useEditAutomation = (automationId: string) => {

  const [edit, setEdit] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const enableEdit = () => setEdit(true)
  const disableEdit = () => setEdit(false)

  //If you need to pass dynamic arguments to the mutation function,
  //you would use an arrow function. 
  const { isPending, mutate } = useMutationData(
    ['update-automation'],
    (data: { name: string }) => updateAutomationName(automationId, { name: data.name }), //doubt here 
    'automation-info',
    disableEdit
  )
  //doubt here ( how usestate using without useclient directive ) (ssr related )

  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node | null)) {
        if (inputRef.current.value !== '') {
          mutate({ name: inputRef.current.value })
        }
        else {
          disableEdit()
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return {
    edit,
    enableEdit,
    disableEdit,
    inputRef,
    isPending,
  }
}

export const useListener = (id: string) => {
  const [listener, setListener] = useState<'MESSAGE' | 'AI'>('MESSAGE')

  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string()
  })

  const { isPending, mutate } = useMutationData(
    ['create-listener'],
    (data: { prompt: string, reply: string }) => saveListener(id, listener, data.prompt, data.reply),
    'automation-info'
  )

  const { register, errors, onFormSubmit, watch, reset } = useZodForm(promptSchema, mutate)

  const onSetListener = (type: 'AI' | 'MESSAGE') => setListener(type)
  return { onSetListener, register, onFormSubmit, listener, isPending }

}

