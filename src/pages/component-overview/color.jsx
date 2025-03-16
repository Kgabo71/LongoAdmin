import { useState } from "react";
import PropTypes from "prop-types";
import { Card, Grid, Stack, Typography, IconButton, Avatar, Box, Modal } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { motion } from "framer-motion";

// Dummy users data
const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", avatar: "https://i.pravatar.cc/100?img=1", role: "Admin" },
  { id: 2, name: "Alice Smith", email: "alice.smith@example.com", avatar: "https://i.pravatar.cc/100?img=2", role: "User" },
  { id: 3, name: "Michael Brown", email: "michael.brown@example.com", avatar: "https://i.pravatar.cc/100?img=3", role: "Moderator" },
];

// User Card Component
function UserCard({ user, onOpen }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={user.avatar} alt={user.name} />
          <Box>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">{user.email}</Typography>
          </Box>
        </Stack>
        <IconButton onClick={() => onOpen(user)}>
          <MoreVert />
        </IconButton>
      </Card>
    </motion.div>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
};

// Profile Modal Component
function ProfileModal({ open, user, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100vh", opacity: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        {user && (
          <Stack spacing={2} alignItems="center">
            <Avatar src={user.avatar} alt={user.name} sx={{ width: 80, height: 80 }} />
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="textSecondary">{user.email}</Typography>
            <Typography variant="body2" color="primary">{user.role}</Typography>
          </Stack>
        )}
      </motion.div>
    </Modal>
  );
}

ProfileModal.propTypes = {
  open: PropTypes.bool.isRequired,
  user: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

// Main Component
export default function ComponentColor() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenProfile = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleCloseProfile = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid key={user.id} item xs={12} sm={6} md={4}>
          <UserCard user={user} onOpen={handleOpenProfile} />
        </Grid>
      ))}
      <ProfileModal open={isModalOpen} user={selectedUser} onClose={handleCloseProfile} />
    </Grid>
  );
}
