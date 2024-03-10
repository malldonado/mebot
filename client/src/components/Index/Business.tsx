function Business() {
  const images = [
    'https://i.pinimg.com/564x/ec/5f/20/ec5f208ccc263e4b67caab49d7932411.jpg',
    'https://i.pinimg.com/564x/62/fb/ab/62fbabb3f4f2af939b1c413deeca62de.jpg',
    'https://i.pinimg.com/564x/07/db/86/07db86fe74bb2d6ab00380b8449e2fd8.jpg',
    'https://i.pinimg.com/564x/29/98/23/299823e0daffea0d91cea63c6bb29482.jpg',
    'https://i.pinimg.com/564x/9d/1b/21/9d1b219c6707ea1e4bdb9d9ceb19c7a9.jpg',
    // 'https://i.pinimg.com/564x/12/1c/79/121c7989f269e6e1150822f0a7f10f04.jpg',
  ];

  return (
    <div className="h-[600px] w-auto relative max-w-[1200px] m-auto mt-20 flex items-center">
      <div>
        <h1 className="text-center quicksand text-[70px] font-bold leading-[6rem] mb-10">
          Empowering companies to stand out with customer experience
        </h1>
        <div className="flex justify-between">
          {images.map((imageUrl, index) => (
            <img
              className="w-[20%]"
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Business;
