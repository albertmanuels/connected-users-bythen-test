import useGetUserDetail from "@/hooks/useGetUserDetail"
import { DetailUserModalProps } from "./DetailUserModal.types"


const useDetailUserModal = (props: DetailUserModalProps) => {
  const { id } = props

  const { data, isLoading } = useGetUserDetail({ id })

  return {
    data,
    isLoading
  }
}

export default useDetailUserModal