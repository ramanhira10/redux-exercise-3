import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

const PostAuthor = props => {
    const { userId } = props;
    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === userId);

    const authorName = author && author.name ? author.name : 'Unknown Author';
    return (
        <span>by {authorName}</span>
    );
};

export default PostAuthor;