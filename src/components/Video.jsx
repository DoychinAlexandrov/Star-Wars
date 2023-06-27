import Video from "../assets/video.mp4";

const VideoSection = () => {
    return (
        <section className="video-section">
            <div className="video-container">
                <video className="video" controls>
                    <source src={Video} type="video/mp4" />
                </video>
            </div>
        </section>
    );
};

export default VideoSection;
