import React, { useState, useEffect } from "react";
import * as S from "./style";
import ImageUpload from "../../../assets/image/Image.svg";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
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
    if (!file) {
      console.log("선택된 파일이 없습니다.");
      return;
    }

    console.log("선택된 파일:", file);

    const reader = new FileReader();

    reader.onload = () => {
      console.log("파일 읽기 성공:", reader.result);
      setUploadedImage(reader.result as string);
    };

    reader.onerror = (error) => {
      console.error("파일 읽기 실패:", error);
    };

    reader.readAsDataURL(file);

    event.target.value = "";
  };

  useEffect(() => {
    if (uploadedImage) {
      console.log("업로드된 이미지가 상태에 저장되었습니다:", uploadedImage);
    }
  }, [uploadedImage]);

  const handleSubmit = () => {
    const newErrors = {
      title: title.trim() === "",
      content: content.trim() === "",
      tag: selectedTag === null,
    };

    setErrors(newErrors);

    if (!newErrors.title && !newErrors.content && !newErrors.tag) {
      console.log("게시글 제출:", {
        title,
        content,
        selectedTag,
        uploadedImage,
      });
    }
  };

  return (
    <S.CreatePostContainer>
      <S.ImageUploadContainer>
        {uploadedImage ? (
          <S.UploadedImage src={uploadedImage} alt="Uploaded" />
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
          multiline={false}
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
          multiline={true}
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
