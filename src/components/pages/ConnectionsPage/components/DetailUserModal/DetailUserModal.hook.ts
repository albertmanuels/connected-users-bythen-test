import useGetUserDetail from "@/hooks/useGetUserDetail"
import { DetailUserModalProps } from "./DetailUserModal.types"


const useDetailUserModal = (props: DetailUserModalProps) => {
  const { id } = props

  const { data } = useGetUserDetail({ id })

  return {
    data
  }
}

export default useDetailUserModal