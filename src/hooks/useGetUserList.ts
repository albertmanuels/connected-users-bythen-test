import { generateQueryParams } from '@/lib'
import { useQuery } from '@tanstack/react-query'

type Data = {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: Array<{
    avatar: string
    email: string
    first_name: string
    id: number
    last_name: string
  }>
}

const useGetUserList = (params: {[k:string]: any}) => {
  const query = useQuery({
    queryFn: async () => {
      console.log(`${process.env.NEXT_PUBLIC_REGRES_API}/users${"?" + generateQueryParams(params)}`)
      const res = await fetch(`${process.env.NEXT_PUBLIC_REGRES_API}/users${"?" + generateQueryParams(params)}`)
      const data: Data = await res.json()

      return data
    },

    queryKey: ['users']
  })

  return  query
}

export default useGetUserList