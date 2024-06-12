const Video = () => {
  return (
    <div className="bg-preto flex justify-center items-center py-10 font-franklinheavy">
      <div className="w-full md:w-10/12" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/F74c_1nwVbY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
