import React, { useEffect, useState } from 'react'
import { EditUserModalProps, FormValues } from './EditUserModal.types';
import { useQueryClient } from '@tanstack/react-query';
import useGetUserDetail from '@/hooks/useGetUserDetail';
import useSaveUserDetail from '@/hooks/useSaveUserDetail';
import NiceModal from '@ebay/nice-modal-react';
import { globalModalId } from '@/components/shared/GlobalModalPortal/GlobalModalPortal.constants';
import closeNiceModal from '@/lib/closeNiceModal';
import { modal } from '../../Connections.constants';

const useEditUserModal = (props: EditUserModalProps) => {
  const { id } = props
  const modalId = modal.EDIT_USER

  const queryClient = useQueryClient()

  const [userFormData, setUseFormData] = useState({
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    avatar: ""
  })

  const { data, isSuccess } = useGetUserDetail({ id });

  const { mutate, isPending: isSaveLoading } = useSaveUserDetail({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', id] })
      queryClient.invalidateQueries({ queryKey: ['user-list'] })
      closeNiceModal(modalId)
      NiceModal.show(globalModalId.SUCCESS)
    },
    onError: () => {
      NiceModal.show(globalModalId.ERROR)
    }
  })

  useEffect(() => {
    if(isSuccess) {
      setUseFormData({
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        avatar: data.avatar,
        email: data.email,
      })
    }
  }, [isSuccess, data])

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData) as unknown as FormValues;
    
    mutate({
      id,
      name: `${formValues.firstName} ${formValues.lastName}`,
      job: 'Astronaut' 
    })
  }

  const handleOnClose = () => {
    closeNiceModal(modalId)
    if(isSuccess) {
      setUseFormData({
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        avatar: data.avatar,
        email: data.email,
      })
    }
  }

  return {
    handleOnClose,
    handleOnSubmit,
    data,
    setUseFormData,
    userFormData,
    isSaveLoading,
  }
}

export default useEditUserModal