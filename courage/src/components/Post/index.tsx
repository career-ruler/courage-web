import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import PostForm from "../Profile/component/PostForm";
import { fetchPostsByCategory, PostForms } from "../../api/post/post";
import clickIcon from "../../assets/image/test.png";
import shareIcon from "../../assets/image/testt.png";

const categories = ["전체", "SERVER", "WEB", "ANDROID", "iOS", "AI"];

const Post = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [posts, setPosts] = useState<PostForms[]>([]);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePostClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPostsByCategory(selectedCategory);

        // boardId 내림차순 정렬 (큰 숫자가 위로)
        data.sort((a, b) => b.boardId - a.boardId);

        setPosts(data);
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
      }
    };
    loadPosts();
  }, [selectedCategory]);

  return (
    <S.PostContainer>
      <S.PostCategoryContainer>
        {categories.map((cat) => (
          <S.PostCategoryTitle
            key={cat}
            selected={selectedCategory === cat}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </S.PostCategoryTitle>
        ))}
      </S.PostCategoryContainer>

      <S.ColumnContainer>
        {posts.map((post, idx) => {
          const image = idx === 0 ? clickIcon : shareIcon;

          return (
            <div
              key={post.boardId}
              onClick={() => handlePostClick(post.boardId)}
            >
              <PostForm
                title={post.title}
                username={post.userId ?? "leeyoonchae"}
                image={image}
                date={new Date(post.createdDate).toLocaleDateString()}
              />
            </div>
          );
        })}
      </S.ColumnContainer>
    </S.PostContainer>
  );
};

export default Post;
