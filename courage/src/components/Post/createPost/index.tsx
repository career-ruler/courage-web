import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import ImageUpload from "../../../assets/image/Image.svg";
import { createPost } from "../../../api/post/post";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [uploadedImageFile, setUploadedImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState({
    title: false,
    content: false,
    tag: false,
  });

  const tags = ["Server", "Web", "Android", "iOS", "AI"];

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setErrors((prev) => ({ ...prev, tag: false }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadedImageFile(file);
    event.target.value = "";
  };

  const handleSubmit = async () => {
    const newErrors = {
      title: title.trim() === "",
      content: content.trim() === "",
      tag: selectedTag === null,
    };

    setErrors(newErrors);

    if (newErrors.title || newErrors.content || newErrors.tag) return;

    try {
      const response = await createPost({
        title,
        description: content,
        picture: uploadedImageFile,
        category: selectedTag!,
      });

      console.log("게시글 등록 성공:", response);
      navigate("/post"); // 성공 시 /post로 이동
    } catch (err) {
      console.error("게시글 등록 실패:", err);
    }
  };

  return (
    <S.CreatePostContainer>
      <S.ImageUploadContainer>
        {uploadedImageFile ? (
          <S.UploadedImage
            src={URL.createObjectURL(uploadedImageFile)}
            alt="Uploaded"
          />
        ) : (
          <>
            <S.ImageUploadIcon src={ImageUpload} alt="Image Upload" />
            <S.ImageUploadText>이미지 업로드하기</S.ImageUploadText>
          </>
        )}
        <S.HiddenFileInput
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </S.ImageUploadContainer>

      <S.EnterContainer>
        <S.MediumText>제목</S.MediumText>
        <S.MediumTextField
          placeholder="게시글의 제목을 입력해주세요."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setErrors((prev) => ({ ...prev, title: false }));
          }}
        />
        {errors.title && <S.ErrorText>*제목을 입력해주세요.</S.ErrorText>}

        <S.MediumText>내용</S.MediumText>
        <S.MediumTextField
          placeholder="게시글의 내용을 입력해주세요."
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setErrors((prev) => ({ ...prev, content: false }));
          }}
          multiline
        />
        {errors.content && <S.ErrorText>*내용을 입력해주세요.</S.ErrorText>}

        <S.MediumText>태그</S.MediumText>
        <S.TagContainer>
          {tags.map((tag) => (
            <S.Tag
              key={tag}
              selected={selectedTag === tag}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </S.Tag>
          ))}
        </S.TagContainer>
        {errors.tag && <S.ErrorText>*태그를 선택해주세요.</S.ErrorText>}

        <S.SendButton onClick={handleSubmit}>게시글 올리기</S.SendButton>
      </S.EnterContainer>
    </S.CreatePostContainer>
  );
};

export default CreatePost;
