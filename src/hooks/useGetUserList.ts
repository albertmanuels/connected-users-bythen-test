"use client"
import { generateQueryParams } from '@/lib'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

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
    placeholderData: keepPreviousData,
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users${"?" + generateQueryParams(params)}`)
      const data: Data = await res.json()

      return data
    },

    queryKey: ['users', params]
  })

  return  query
}

export default useGetUserList