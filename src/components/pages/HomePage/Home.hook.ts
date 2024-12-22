import useGetUserList from '@/hooks/useGetUserList'


const useHomePage = () => {
  const {data, isLoading} = useGetUserList({
    page: 2
  })

  const userListData = data?.data

  return {
    userListData,
    isLoading,
  }
}

export default useHomePage