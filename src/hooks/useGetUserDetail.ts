import { useQuery } from '@tanstack/react-query'

type Payload = {
  id: number
}

const useGetUserDetail = ({id}: Payload) => {
  const query = useQuery({
    enabled: !!id, 
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_REGRES_API}/users/${id}`)
      const data = await res.json()

      return data.data
    },
    queryKey: ['user', id]
  })

  return query
}

export default useGetUserDetail