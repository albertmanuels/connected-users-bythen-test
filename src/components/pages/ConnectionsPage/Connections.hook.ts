"use client"
import NiceModal from '@ebay/nice-modal-react'
import { modal } from './Connections.constants'
import useGetInfiniteUserList from '@/hooks/useGetInfiniteUserList';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const useConnectionsPage = () => {

  const { ref: observerRef, inView } = useInView({
    threshold: 1
  });

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } =
    useGetInfiniteUserList();

  useEffect(() => {
    if(inView && hasNextPage) {
      fetchNextPage()
    }

  }, [inView, hasNextPage, fetchNextPage])

  const userList = data?.pages.map((users) => users.data).flat();

  const handleOpenDetail = (id: number) => {
    NiceModal.show(modal.DETAIL_USER, { id })
  }

  const handleOpenEdit = (id: number) => {
    NiceModal.show(modal.EDIT_USER, { id })
  }

  return {
    userList, 
    isLoading, 
    handleOpenDetail, 
    handleOpenEdit,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    observerRef,
  }
}

export default useConnectionsPage