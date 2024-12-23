import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query'

const useGetInfiniteUserList = () => {
  const query = useInfiniteQuery({
    placeholderData: keepPreviousData,
    queryKey: ['user-list'],
    queryFn: async ({ pageParam }: {pageParam: number}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_REGRES_API}/users?page=${pageParam}`)
    const data = res.json()

    return data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {   
      const nextPage = lastPage.page < lastPage.total_pages ? allPages.length + 1 : undefined
      return nextPage
    }
  })

  return query
}

export default useGetInfiniteUserList