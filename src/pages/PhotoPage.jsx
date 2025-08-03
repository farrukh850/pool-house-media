import React from 'react';

function PhotoPage() {
  return (
    <div className="container mx-auto px-4 md:px-8">
     <div className="grid grid-cols-12 gap-4 md:gap-8">
         <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <img
            src="/images/photos-gallery/gallery-img1.png"
            alt="Gallery 1"
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[668px] w-full object-cover"
          />
        </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/images/photos-gallery/gallery-img2.png"
            alt="Gallery 2"
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[668px] w-full object-cover"
          />
        </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/images/photos-gallery/gallery-img3.png"
            alt="Gallery 3"
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[668px] w-full object-cover"
          />
        </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/images/photos-gallery/gallery-img4.png"
            alt="Gallery 4"
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[668px] w-full object-cover"
          />
        </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <img
            src="/images/photos-gallery/gallery-img5.png"
            alt="Gallery 5"
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[668px] w-full object-cover"
          />
        </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-12">
             <img
                 src="/images/photos-gallery/gallery-img6.png"
                 alt="Gallery 6"
                 className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[892px] w-full object-cover"
             />
         </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-4">
             <img
                 src="/images/photos-gallery/gallery-img7.png"
                 alt="Gallery 7"
                 className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[668px] w-full object-cover"
             />
         </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-8">
             <img
                 src="/images/photos-gallery/gallery-img8.png"
                 alt="Gallery 8"
                 className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[668px] w-full object-cover"
             />
         </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-12">
             <img
                 src="/images/photos-gallery/gallery-img9.png"
                 alt="Gallery 9"
                 className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[892px] w-full object-cover"
             />
         </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-8">
             <img
                 src="/images/photos-gallery/gallery-img10.png"
                 alt="Gallery 10"
                 className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[668px] w-full object-cover"
             />
         </div>
         <div className="col-span-12 sm:col-span-6 lg:col-span-4">
             <img
                 src="/images/photos-gallery/gallery-img11.png"
                 alt="Gallery 11"
                 className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[668px] w-full object-cover"
             />
         </div>
     </div>
    </div>
  );
}

export default PhotoPage;
