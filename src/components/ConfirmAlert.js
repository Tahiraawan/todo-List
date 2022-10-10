import { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import

function ConfirmAlert({ open, onConfirm, onCancel }) {
  const options = {
    title: 'Title',
    message: 'Message',
    buttons: [
      {
        label: 'Yes',
        onClick: onConfirm
      },
      {
        label: 'No',
        onClick: onCancel
      }
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
  };
  
  useEffect(() => {
    if (open) {
      confirmAlert(options)
    }
  }, [open])

  return null
}

export default ConfirmAlert;