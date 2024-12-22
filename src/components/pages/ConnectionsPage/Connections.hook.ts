import useGetUserList from '@/hooks/useGetUserList'
import NiceModal from '@ebay/nice-modal-react'
import { modal } from './Connections.constants'

const useConnectionsPage = () => {
  const { data, isLoading } = useGetUserList({
    page: 2
  })

  const userListData = data?.data

  const handleOpenDetail = (id: number) => {
    NiceModal.show(modal.DETAIL_USER, { id })
  }

  const handleOpenEdit = (id: number) => {
    NiceModal.show(modal.EDIT_USER, { id })
  }

  return {
    userListData, isLoading, handleOpenDetail, handleOpenEdit
  }
}

export default useConnectionsPage