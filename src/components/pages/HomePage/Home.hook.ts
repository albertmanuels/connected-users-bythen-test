import useGetUserList from '@/hooks/useGetUserList'
import { useState } from 'react'


const useHomePage = () => {
  const [modal, setModal] = useState<{isOpen: boolean, id: number | null}>({
    isOpen: false,
    id: null,
  })

  const {data, isLoading} = useGetUserList({
    page: 2
  })

  const userListData = data?.data

  return {
    userListData,
    isLoading,
    modal,
    setModal
  }
}

export default useHomePage