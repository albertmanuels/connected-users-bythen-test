import useGetUserList from '@/hooks/useGetUserList'
import NiceModal from '@ebay/nice-modal-react'
import { useState } from 'react'
import { modal } from './Home.constants'


const useHomePage = () => {
  const [detailModal, setDetailModal] = useState<{isOpen: boolean, id: number | null}>({
    isOpen: false,
    id: null,
  })

  const [editModal, setEditModal] = useState<{isOpen: boolean, id: number | null}>({
    isOpen: false,
    id: null,
  })

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
    userListData,
    isLoading,
    detailModal,
    setDetailModal,
    editModal,
    setEditModal,
    handleOpenDetail,
    handleOpenEdit
  }
}

export default useHomePage