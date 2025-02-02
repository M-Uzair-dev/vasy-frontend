const uploadFile = async (image, setUploading) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "thoughtsArea");
  data.append("cloud_name", "dexeo4ce2");

  setUploading(true);
  try {
    let answer = await fetch(
      "https://api.cloudinary.com/v1_1/dexeo4ce2/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    let value = await answer.json();
    return value.url;
  } catch (error) {
    console.log(error);
  } finally {
    setUploading(false);
  }
};
export default uploadFile;
