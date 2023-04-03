import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕️'
};

const ReactionButtons = props => {
    const dispatch = useDispatch();
    const { post } = props;

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <buton
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}
            >{emoji} {post.reactions[name]}</buton>
        );
    });

    return (
        <div>{reactionButtons}</div>
    );
};

export default ReactionButtons;