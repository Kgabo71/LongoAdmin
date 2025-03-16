import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { motion } from 'framer-motion'; // For animation

// icons
const icons = {
  UserOutlined,
  InfoCircleOutlined
};

// ==============================|| MENU ITEMS - VIEW USERS ||============================== //

const Users = {
  id: 'users',
  title: 'Users',
  type: 'group',
  children: [
    {
      id: 'view-all-users',
      title: 'View All Users',
      type: 'item',
      icon: icons.UserOutlined,
      onClick: () => {
        // Function to fetch users from an API or database
        // This will be dynamic and will be handled via a component
        // For now, we can show a placeholder or sample user info.
      }
    }
  ]
};

// ==============================|| USER DETAIL COMPONENT ||============================== //
const UserDetail = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div>
      <motion.div
        animate={{ opacity: showDetails ? 1 : 0, scale: showDetails ? 1 : 0.8 }}
        transition={{ duration: 0.5 }}
        className="user-card"
        onClick={toggleDetails}
        style={{ cursor: 'pointer', marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}
      >
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </motion.div>

      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="user-info"
        >
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </motion.div>
      )}
    </div>
  );
};

// Example usage: Replace with real user data
const sampleUser = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '123-456-7890',
  address: '123 Main St, City, Country'
};

export { Users, UserDetail, sampleUser };

export default Users;
