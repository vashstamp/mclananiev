import React from 'react'
import MuiDrawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded'

import './Drawer.scss'
import Navigation from '../_common/Navigation'

interface DrawerProps {
  open: boolean
  onClose: () => void
}

export default function Drawer({open, onClose}: DrawerProps) {
  return (
    <MuiDrawer
      keepMounted
      disablePortal
      className="Drawer"
      open={open}
      elevation={0}
      onClose={onClose}
    >
      <div className="Drawer-Content">
        <div className="Drawer-Block">
          <IconButton className="Colorful" onClick={onClose}>
            <ArrowBackIcon className="ButtonIcon" />
          </IconButton>
        </div>
        <Navigation onClose={onClose} />
      </div>
    </MuiDrawer>
  )
}
