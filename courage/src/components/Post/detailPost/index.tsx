import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import PostProfile from "../../../assets/image/profile.svg";
import SendIcon from "../../../assets/image/Send.svg";
import ArrowDownIcon from "../../../assets/image/arrow-down.svg";
import ArrowUpIcon from "../../../assets/image/arrow-up.svg";
import PostTestImg from "../../../assets/image/test.png";

interface Reply {
  username: string;
  content: string;
}

interface Comment {
  username: string;
  content: string;
  replies: Reply[];
}

interface DetailPostData {
  boardId: number;
  userId: string;
  title: string;
  description: string;
  picture: string;
  category: string;
  createdDate: string;
  comments: Comment[];
}

const CommentComponent: React.FC<{
  comment: Comment;
  onAddReply: (parentIndex: number, replyContent: string) => void;
  index: number;
}> = ({ comment, onAddReply, index }) => {
  const [isRepliesVisible, setIsRepliesVisible] = useState(false);
  const [replyInput, setReplyInput] = useState("");

  const toggleReplies = () => setIsRepliesVisible((v) => !v);

  const handleReplySubmit = () => {
    if (!replyInput.trim()) return;
    onAddReply(index, replyInput.trim());
    setReplyInput("");
  };

  return (
    <S.CommentContainer>
      <S.CommentHeader>
        <S.CommentUsername>{comment.username}</S.CommentUsername>
        <S.CommentContent>{comment.content}</S.CommentContent>
        <S.ToggleRepliesButton onClick={toggleReplies}>
          <img
            src={isRepliesVisible ? ArrowUpIcon : ArrowDownIcon}
            alt="Toggle Replies"
          />
          <span>답글</span>
        </S.ToggleRepliesButton>
      </S.CommentHeader>

      {isRepliesVisible && (
        <S.RepliesContainer>
          <S.ReplyInputContainer>
            <S.ReplyInputField
              placeholder="답글을 입력해주세요."
              value={replyInput}
              onChange={(e) => setReplyInput(e.target.value)}
            />
            <S.ReplyInputIcon onClick={handleReplySubmit}>
              <img src={SendIcon} alt="Send Icon" />
            </S.ReplyInputIcon>
            <S.ReplyInputLine />
          </S.ReplyInputContainer>
          {comment.replies.map((reply, idx) => (
            <S.ReplyItem key={idx}>
              <S.CommentUsername>{reply.username}</S.CommentUsername>
              <S.CommentContent>{reply.content}</S.CommentContent>
            </S.ReplyItem>
          ))}
        </S.RepliesContainer>
      )}
    </S.CommentContainer>
  );
};

const DetailPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<DetailPostData | null>(null);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const dummyPost: DetailPostData = {
      boardId: Number(id),
      userId: "leeyoonchae",
      title: "질문입니다",
      description: "제가 포트폴리오에 이 이미지를 넣고 싶은데 픽셀이 깨져요",
      picture: PostTestImg,
      category: "AI",
      createdDate: new Date().toISOString(),
      comments: [
        // {
        //   username: "admin",
        //   content: "이미지 변환하는 사이트 알려드릴까요?",
        //   replies: [
        //     { username: "답글러1", content: "저도 그렇게 생각해요!" },
        //     { username: "답글러2", content: "동의합니다." },
        //   ],
        // },
      ],
    };

    setPost(dummyPost);
  }, [id]);

  const handleAddComment = () => {
    if (!newComment.trim() || !post) return;

    const updatedPost: DetailPostData = {
      ...post,
      comments: [
        ...post.comments,
        {
          username: "leeyoonchae", 
          content: newComment.trim(),
          replies: [],
        },
      ],
    };

    setPost(updatedPost);
    setNewComment("");
  };

  const handleAddReply = (parentIndex: number, replyContent: string) => {
    if (!post) return;

    const updatedComments = [...post.comments];
    updatedComments[parentIndex].replies.push({
      username: "leeyoonchae",
      content: replyContent,
    });

    setPost({ ...post, comments: updatedComments });
  };

  if (!post) return <div>로딩 중...</div>;

  return (
    <S.DetailPostContainer>
      <S.PostImage src={post.picture} alt={post.title} />
      <S.PostTitle>{post.title}</S.PostTitle>
      <S.CategoryTag>{post.category}</S.CategoryTag>

      <S.ProfileContainer>
        <S.ProfileImage src={PostProfile} alt="Profile" />
        <S.ProfileName>{post.userId}</S.ProfileName>
      </S.ProfileContainer>

      <S.PostContent>{post.description}</S.PostContent>

      <S.InputContainer>
        <S.ProfileMediumImage src={PostProfile} alt="Profile" />
        <S.InputField
          placeholder="댓글을 입력해주세요."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <S.InputIconButton onClick={handleAddComment}>
          <img src={SendIcon} alt="Send Icon" />
        </S.InputIconButton>
      </S.InputContainer>

      {post.comments.map((comment, idx) => (
        <CommentComponent
          key={idx}
          comment={comment}
          onAddReply={handleAddReply}
          index={idx}
        />
      ))}
    </S.DetailPostContainer>
  );
};

export default DetailPost;
