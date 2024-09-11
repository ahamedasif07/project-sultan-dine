import image1 from "../../assets/images/sultan-dine-home/ (1).webp";
import image2 from "../../assets/images/sultan-dine-home/ (1).jpg";
import image3 from "../../assets/images/sultan-dine-home/ (2).jpg";
import image4 from "../../assets/images/sultan-dine-home/ (3).jpg";
import image5 from "../../assets/images/sultan-dine-home/ (4).jpg";

import { FaRegEye } from "react-icons/fa6";

const BlogReview = () => {
  const letestPosts = [
    {
      image: image1,
      title: "Grand Opening Mirpur 12",
      views: 45,
      videoLink:
        "https://web.facebook.com/therealsalmanmuqtadir/videos/282061548292253/",
    },
    {
      image: image2,
      title: "New Outlet in Sylhet",
      views: 30,
      videoLink:
        "https://web.facebook.com/therealsalmanmuqtadir/videos/282061548292253/",
    },
    {
      image: image3,
      title: "Sultan's Dine Special Menu",
      views: 55,
      videoLink:
        "https://web.facebook.com/therealsalmanmuqtadir/videos/282061548292253/",
    },
    {
      image: image4,
      title: "Celebration for 100th Outlet",
      views: 100,
      videoLink:
        "https://web.facebook.com/therealsalmanmuqtadir/videos/282061548292253/",
    },
    {
      image: image5,
      title: "Sultan's Dine in Rajshahi",
      views: 40,
      videoLink:
        "https://web.facebook.com/therealsalmanmuqtadir/videos/282061548292253/",
    },
  ];
  return (
    <div className="md:container mx-auto overflow-hidden">
      <h2 className="text-4xl font-bold text-red-900 pt-5  ">Latest Posts</h2>
      <p className="font-semibold text-[14px] my-3">
        {letestPosts.length} video found
      </p>
      <div data-aos="fade-up" className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {letestPosts.map((post, idx) => (
          <div key={idx}>
            <a href={post.videoLink}>
              <div>
                <img className="md:w-[500px]" src={post.image} alt="" />
                <h2 className="text-xl font-semibold pt-3 text-yellow-500">
                  {post.title}
                </h2>
                <p className="flex items-center gap-2 text-gray-600">
                  <span>
                    <FaRegEye />
                  </span>
                  {post.views} views
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogReview;
