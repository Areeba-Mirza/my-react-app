import React from "react";
import TripData from "./TripData";
import "./TripStyles.css";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="tripcard">
        {/* ✅ Public images directly used */}
        <TripData
          image="/images/germany.jpg"
          heading="Trip to Germany"
          text="Lorem ipsum"
        />
        <TripData
          image="/images/switzerland.jpg"
          heading="Trip to Switzerland"
          text="Lorem ipsum"
        />
        <TripData
          image="/images/norway.jpg"
          heading="Trip to Norway"
          text="Lorem ipsum"
        />

        <TripData
          image="/images/hunza.jpeg"
          heading="Trip in Hunza valley"
          text="No holiday in Pakistan is complete without a visit to the breathtaking Hunza valley. This iconic destination offers stunning mountain views, rich culture and warm hospitality."
        />

        <TripData
          image="/images/images1.jpg"
          heading="Trip in Swat valley"
          text="Nestled in the heart of Pakistan's KPK. It packs an incredible variety within its lush green hills and winding rivers. From glittering lakes and snow-covered peaks to charming villages. It offers a glimpse of nature's beauty and cultural richness."
        />

        <TripData
          image="/images/skardu.jpeg"
          heading="Trip in Skardu"
          text="Offering views of Karakoram, a rich blend of Balti culture. Whether camping beside Satpara Lake, exploring majestic Deosai plain, or gazing at K2 from a distance, it promises unforgettable adventure."
        />
      </div>
    </div>
  );
}

export default Trip;
