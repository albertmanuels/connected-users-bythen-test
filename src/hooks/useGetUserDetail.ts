import { ONE_MINUTE } from '@/constants'
import { useQuery } from '@tanstack/react-query'

type Payload = {
  id: number
}

const useGetUserDetail = ({ id }: Payload) => {
  const query = useQuery({
    enabled: !!id, 
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`)
      const data = await res.json()

      return data.data
    },
    queryKey: ['user', id],
    staleTime: ONE_MINUTE
  })

  return query
}

export default useGetUserDetail