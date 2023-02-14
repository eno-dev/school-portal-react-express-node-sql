import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/auth/authSlice';
import { useLogoutMutation } from '../../features/auth/authApiSlice';
import { useDispatch } from 'react-redux';

const ProfileBar = () => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Handle logout function
  const handleLogout = () => {
    // Dispatches logout reducer
    dispatch(logout);
    // Removes the persist:root from storage
    localStorage.removeItem('persist:root');
    // Reloads window to use is redirected to login
    window.location.reload(false);
  };
  // Find profile initials
  const ProfileInitials = () => {
    const user = useSelector(selectCurrentUser);
    if (user) {
      const firstSlice = user.first_name.charAt(0);
      const secondSlice = user.last_name.charAt(0);
      const profileInitials = firstSlice.concat(secondSlice);
      return profileInitials;
    }
  };

  return (
    <nav className="profile-bar">
      <div className="profile-items">
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{
                mr: 1.5,
                '&:hover': {
                  bgcolor: '#EAC671',
                },
              }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              {/* Avatar Initials Information */}
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  color: 'white',
                  background: 'rgba(35,33,85,1)',
                }}
              >
                {ProfileInitials()}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1.5,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        <div className="username">
          <ul>{/* <li><a href="#">{{ user_name }}</a></li> */}</ul>
        </div>
      </div>
    </nav>
  );
};

export default ProfileBar;
