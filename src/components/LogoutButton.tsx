import { handleLogout } from '@/actions/sessionActions';
import { FaSignOutAlt } from 'react-icons/fa';
interface LogoutButtonProps {
  isExpanded: boolean;
}
const LogoutButton: React.FC<LogoutButtonProps> = ({ isExpanded }) => {
  return (
    <form action={handleLogout}>
      <button className="flex items-center p-5 hover:bg-gray-700 w-full text-right">
        <FaSignOutAlt size={20} />
        <span className={`mr-4 flex-grow ${isExpanded ? 'block' : 'hidden'}`}>
          خروج
        </span>
      </button>
    </form>
  );
};
export default LogoutButton;
