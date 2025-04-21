import React, { useState } from "react";
import * as S from "./style";
import PostProfile from "../../../assets/image/profile.svg";
import PostTestImg from "../../../assets/image/banner.png";
import SendIcon from "../../../assets/image/Send.svg";
import ArrowDownIcon from "../../../assets/image/arrow-down.svg";
import ArrowUpIcon from "../../../assets/image/arrow-up.svg";

interface Reply {
  username: string;
  content: string;
}

interface CommentProps {
  username: string;
  content: string;
  replies: Reply[];
}

const Comment: React.FC<CommentProps> = ({ username, content, replies }) => {
  const [isRepliesVisible, setIsRepliesVisible] = useState(false);

  const toggleReplies = () => {
    setIsRepliesVisible((prev) => !prev);
  };

  return (
    <S.CommentContainer>
      <S.CommentHeader>
        <S.CommentUsername>{username}</S.CommentUsername>
        <S.CommentContent>{content}</S.CommentContent>
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
            <S.ReplyInputField placeholder="답글을 입력해주세요." />
            <S.ReplyInputIcon>
              <img src={SendIcon} alt="Send Icon" />
            </S.ReplyInputIcon>
            <S.ReplyInputLine />
          </S.ReplyInputContainer>
          {replies.map((reply, index) => (
            <S.ReplyItem key={index}>
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
  const comments: CommentProps[] = [
    {
      username: "User1",
      content: "정말 멋진 포트폴리오네요!",
      replies: [
        { username: "User2", content: "저도 그렇게 생각해요!" },
        { username: "User3", content: "좋은 피드백 감사합니다." },
      ],
    },
    {
      username: "User4",
      content: "조금 더 구체적인 설명이 있으면 좋을 것 같아요.",
      replies: [],
    },
  ];

  return (
    <S.DetailPostContainer>
      <S.PostImage src={PostTestImg} alt="Post" />
      <S.PostTitle>제 포트폴리오 봐주세요</S.PostTitle>
      <S.CategoryTag>Android</S.CategoryTag>

      <S.ProfileContainer>
        <S.ProfileImage src={PostProfile} alt="Profile" />
        <S.ProfileName>세상에서가장사랑스러운쥐는너쥐</S.ProfileName>
      </S.ProfileContainer>
      <S.PostContent>
        제가 개발자 포트폴리오를 만들었는데요. 처음 써봐서 그런가 내용이 좀
        부실해서 봐주실 수 있나요? 참고로 완전 신입입니다..경력 없어요.
        <br />
        아 그리고 이 포트폴리오는 제가 만든 것이라서 참고하실 분은
        <br />
        <strong>포트폴리오 링크</strong>
        <br />
      </S.PostContent>

      <S.InputContainer>
        <S.ProfileMediumImage src={PostProfile} alt="Profile" />
        <S.InputField placeholder="댓글을 입력해주세요." />
        <S.InputIconButton>
          <img src={SendIcon} alt="Search Icon" />
        </S.InputIconButton>
      </S.InputContainer>

      {comments.map((comment, index) => (
        <Comment
          key={index}
          username={comment.username}
          content={comment.content}
          replies={comment.replies}
        />
      ))}
    </S.DetailPostContainer>
  );
};

export default DetailPost;
