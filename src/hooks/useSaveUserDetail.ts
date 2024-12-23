import { useMutation } from '@tanstack/react-query'

type Payload = {
  id: number,
  name: string,
  job: string,
}

const useSaveUserDetail = ({
  onSuccess =  () => {},
  onError = () => {}
}) => {
  const mutation = useMutation({
    mutationFn: async (payload: Payload) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_REGRES_API}/users/${payload.id}`, {
        method: "POST",
        body: JSON.stringify({
          name: payload.name,
          job: payload.job
        })
      })

      return res
    },
    onSuccess: () => {
      onSuccess()
    },
    onError: () => {
      onError()
    }
  })
  return mutation
}

export default useSaveUserDetail