import NiceModal from '@ebay/nice-modal-react'

const closeNiceModal = (modalId: string) => {
  NiceModal.hide(modalId)
  NiceModal.remove(modalId)
}

export default closeNiceModal