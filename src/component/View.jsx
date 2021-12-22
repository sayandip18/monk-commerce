import React from 'react';
import './View.css';
import { Info } from './utils/data';
import { Carousel, CarouselItem } from './Carousel/Carousel';

const TOTAL_CAROUSEL_COUNT = Info.length;

export const View = () => {
    return (
        <div>
            <header className="container-header">
                <div className="svg">
                    <svg width="149" height="37" viewBox="0 0 149 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.04 25.1162C46.9067 25.1162 46.7933 25.0695 46.7 24.9762C46.6067 24.8829 46.56 24.7695 46.56 24.6362V11.5962C46.56 11.4495 46.6067 11.3362 46.7 11.2562C46.7933 11.1629 46.9067 11.1162 47.04 11.1162H48.92C49.0667 11.1162 49.18 11.1629 49.26 11.2562C49.3533 11.3362 49.4 11.4495 49.4 11.5962V22.7162H55.74C55.8867 22.7162 56.0067 22.7629 56.1 22.8562C56.1933 22.9495 56.24 23.0629 56.24 23.1962V24.6362C56.24 24.7695 56.1933 24.8829 56.1 24.9762C56.0067 25.0695 55.8867 25.1162 55.74 25.1162H47.04ZM60.9611 25.3162C60.2811 25.3162 59.6544 25.1829 59.0811 24.9162C58.5211 24.6362 58.0744 24.2629 57.7411 23.7962C57.4211 23.3295 57.2611 22.8162 57.2611 22.2562C57.2611 21.3495 57.6278 20.6162 58.3611 20.0562C59.0944 19.4962 60.1011 19.1162 61.3811 18.9162L64.1211 18.5162V18.0962C64.1211 17.5229 63.9744 17.0895 63.6811 16.7962C63.3878 16.5029 62.9211 16.3562 62.2811 16.3562C61.8411 16.3562 61.4878 16.4362 61.2211 16.5962C60.9544 16.7562 60.7344 16.9229 60.5611 17.0962C60.4011 17.2562 60.2944 17.3629 60.2411 17.4162C60.1878 17.5762 60.0878 17.6562 59.9411 17.6562H58.3811C58.2611 17.6562 58.1544 17.6162 58.0611 17.5362C57.9811 17.4562 57.9411 17.3495 57.9411 17.2162C57.9544 16.8829 58.1144 16.5095 58.4211 16.0962C58.7411 15.6695 59.2278 15.3029 59.8811 14.9962C60.5344 14.6762 61.3411 14.5162 62.3011 14.5162C63.8744 14.5162 65.0211 14.8695 65.7411 15.5762C66.4611 16.2829 66.8211 17.2095 66.8211 18.3562V24.6362C66.8211 24.7695 66.7744 24.8829 66.6811 24.9762C66.6011 25.0695 66.4878 25.1162 66.3411 25.1162H64.6811C64.5478 25.1162 64.4344 25.0695 64.3411 24.9762C64.2478 24.8829 64.2011 24.7695 64.2011 24.6362V23.8562C63.9078 24.2829 63.4944 24.6362 62.9611 24.9162C62.4278 25.1829 61.7611 25.3162 60.9611 25.3162ZM61.6411 23.3962C62.3744 23.3962 62.9744 23.1562 63.4411 22.6762C63.9078 22.1962 64.1411 21.5029 64.1411 20.5962V20.1962L62.1411 20.5162C60.6078 20.7562 59.8411 21.2695 59.8411 22.0562C59.8411 22.4829 60.0144 22.8162 60.3611 23.0562C60.7211 23.2829 61.1478 23.3962 61.6411 23.3962ZM73.3464 25.3162C72.3331 25.3162 71.4864 25.1629 70.8064 24.8562C70.1264 24.5495 69.6197 24.1962 69.2864 23.7962C68.9664 23.3829 68.8064 23.0295 68.8064 22.7362C68.8064 22.6029 68.8464 22.4962 68.9264 22.4162C69.0197 22.3362 69.1264 22.2962 69.2464 22.2962H70.8864C70.9931 22.2962 71.0864 22.3495 71.1664 22.4562C71.2331 22.5095 71.3797 22.6362 71.6064 22.8362C71.8464 23.0362 72.1131 23.1962 72.4064 23.3162C72.7131 23.4229 73.0464 23.4762 73.4064 23.4762C73.9397 23.4762 74.3731 23.3762 74.7064 23.1762C75.0397 22.9629 75.2064 22.6629 75.2064 22.2762C75.2064 22.0095 75.1264 21.7962 74.9664 21.6362C74.8197 21.4629 74.5464 21.3095 74.1464 21.1762C73.7597 21.0295 73.1731 20.8695 72.3864 20.6962C71.2531 20.4562 70.4131 20.0895 69.8664 19.5962C69.3331 19.1029 69.0664 18.4495 69.0664 17.6362C69.0664 17.1029 69.2264 16.6029 69.5464 16.1362C69.8664 15.6562 70.3397 15.2695 70.9664 14.9762C71.6064 14.6695 72.3664 14.5162 73.2464 14.5162C74.1531 14.5162 74.9331 14.6629 75.5864 14.9562C76.2397 15.2362 76.7331 15.5762 77.0664 15.9762C77.4131 16.3762 77.5864 16.7295 77.5864 17.0362C77.5864 17.1562 77.5397 17.2629 77.4464 17.3562C77.3664 17.4362 77.2664 17.4762 77.1464 17.4762H75.6464C75.4997 17.4762 75.3864 17.4229 75.3064 17.3162C75.2131 17.2495 75.0597 17.1295 74.8464 16.9562C74.6464 16.7695 74.4197 16.6229 74.1664 16.5162C73.9131 16.4095 73.6064 16.3562 73.2464 16.3562C72.7531 16.3562 72.3731 16.4629 72.1064 16.6762C71.8397 16.8895 71.7064 17.1695 71.7064 17.5162C71.7064 17.7562 71.7664 17.9562 71.8864 18.1162C72.0197 18.2762 72.2797 18.4295 72.6664 18.5762C73.0531 18.7095 73.6331 18.8495 74.4064 18.9962C76.8064 19.4629 78.0064 20.5095 78.0064 22.1362C78.0064 23.0829 77.5931 23.8495 76.7664 24.4362C75.9531 25.0229 74.8131 25.3162 73.3464 25.3162ZM80.5505 25.1162C80.4171 25.1162 80.3038 25.0695 80.2105 24.9762C80.1171 24.8829 80.0705 24.7695 80.0705 24.6362V11.3962C80.0705 11.2495 80.1171 11.1362 80.2105 11.0562C80.3038 10.9629 80.4171 10.9162 80.5505 10.9162H82.2305C82.3771 10.9162 82.4905 10.9629 82.5705 11.0562C82.6638 11.1362 82.7105 11.2495 82.7105 11.3962V24.6362C82.7105 24.7695 82.6638 24.8829 82.5705 24.9762C82.4905 25.0695 82.3771 25.1162 82.2305 25.1162H80.5505ZM89.863 25.3162C88.3696 25.3162 87.183 24.8895 86.303 24.0362C85.4363 23.1829 84.9763 21.9695 84.923 20.3962L84.903 19.8962C84.903 18.2295 85.3363 16.9162 86.203 15.9562C87.083 14.9962 88.2963 14.5162 89.843 14.5162C91.4296 14.5162 92.6496 14.9962 93.503 15.9562C94.3696 16.9162 94.803 18.1962 94.803 19.7962V20.2162C94.803 20.3495 94.7563 20.4629 94.663 20.5562C94.5696 20.6495 94.4496 20.6962 94.303 20.6962H87.663V20.8562C87.6896 21.6029 87.8896 22.2229 88.263 22.7162C88.6496 23.1962 89.1763 23.4362 89.843 23.4362C90.603 23.4362 91.223 23.1295 91.703 22.5162C91.823 22.3695 91.9163 22.2829 91.983 22.2562C92.0496 22.2162 92.163 22.1962 92.323 22.1962H94.083C94.203 22.1962 94.303 22.2295 94.383 22.2962C94.4763 22.3629 94.523 22.4562 94.523 22.5762C94.523 22.8962 94.3296 23.2762 93.943 23.7162C93.5696 24.1429 93.0296 24.5162 92.323 24.8362C91.6163 25.1562 90.7963 25.3162 89.863 25.3162ZM92.043 18.9962V18.9562C92.043 18.1695 91.843 17.5429 91.443 17.0762C91.0563 16.5962 90.523 16.3562 89.843 16.3562C89.163 16.3562 88.6296 16.5962 88.243 17.0762C87.8563 17.5429 87.663 18.1695 87.663 18.9562V18.9962H92.043ZM100.885 25.3162C99.8721 25.3162 99.0255 25.1629 98.3455 24.8562C97.6655 24.5495 97.1588 24.1962 96.8255 23.7962C96.5055 23.3829 96.3455 23.0295 96.3455 22.7362C96.3455 22.6029 96.3855 22.4962 96.4655 22.4162C96.5588 22.3362 96.6655 22.2962 96.7855 22.2962H98.4255C98.5321 22.2962 98.6255 22.3495 98.7055 22.4562C98.7721 22.5095 98.9188 22.6362 99.1455 22.8362C99.3855 23.0362 99.6521 23.1962 99.9455 23.3162C100.252 23.4229 100.585 23.4762 100.945 23.4762C101.479 23.4762 101.912 23.3762 102.245 23.1762C102.579 22.9629 102.745 22.6629 102.745 22.2762C102.745 22.0095 102.665 21.7962 102.505 21.6362C102.359 21.4629 102.085 21.3095 101.685 21.1762C101.299 21.0295 100.712 20.8695 99.9255 20.6962C98.7921 20.4562 97.9521 20.0895 97.4055 19.5962C96.8721 19.1029 96.6055 18.4495 96.6055 17.6362C96.6055 17.1029 96.7655 16.6029 97.0855 16.1362C97.4055 15.6562 97.8788 15.2695 98.5055 14.9762C99.1455 14.6695 99.9055 14.5162 100.785 14.5162C101.692 14.5162 102.472 14.6629 103.125 14.9562C103.779 15.2362 104.272 15.5762 104.605 15.9762C104.952 16.3762 105.125 16.7295 105.125 17.0362C105.125 17.1562 105.079 17.2629 104.985 17.3562C104.905 17.4362 104.805 17.4762 104.685 17.4762H103.185C103.039 17.4762 102.925 17.4229 102.845 17.3162C102.752 17.2495 102.599 17.1295 102.385 16.9562C102.185 16.7695 101.959 16.6229 101.705 16.5162C101.452 16.4095 101.145 16.3562 100.785 16.3562C100.292 16.3562 99.9121 16.4629 99.6455 16.6762C99.3788 16.8895 99.2455 17.1695 99.2455 17.5162C99.2455 17.7562 99.3055 17.9562 99.4255 18.1162C99.5588 18.2762 99.8188 18.4295 100.205 18.5762C100.592 18.7095 101.172 18.8495 101.945 18.9962C104.345 19.4629 105.545 20.5095 105.545 22.1362C105.545 23.0829 105.132 23.8495 104.305 24.4362C103.492 25.0229 102.352 25.3162 100.885 25.3162ZM111.63 25.1162C111.403 25.1162 111.216 25.0629 111.07 24.9562C110.936 24.8362 110.843 24.6895 110.79 24.5162L106.75 11.7162L106.71 11.5362C106.71 11.4295 106.75 11.3362 106.83 11.2562C106.923 11.1629 107.03 11.1162 107.15 11.1162H109.77C109.97 11.1162 110.13 11.1762 110.25 11.2962C110.383 11.4029 110.47 11.5229 110.51 11.6562L113.23 20.6962L115.97 11.6562C116.01 11.5095 116.09 11.3829 116.21 11.2762C116.343 11.1695 116.51 11.1162 116.71 11.1162H119.33C119.45 11.1162 119.55 11.1629 119.63 11.2562C119.71 11.3362 119.75 11.4295 119.75 11.5362C119.75 11.6029 119.743 11.6629 119.73 11.7162L115.67 24.5162C115.63 24.6895 115.536 24.8362 115.39 24.9562C115.256 25.0629 115.076 25.1162 114.85 25.1162H111.63ZM122.075 25.1162C121.942 25.1162 121.822 25.0695 121.715 24.9762C121.622 24.8695 121.575 24.7495 121.575 24.6162V11.6362C121.575 11.4895 121.622 11.3695 121.715 11.2762C121.808 11.1695 121.928 11.1162 122.075 11.1162H127.735C129.468 11.1162 130.828 11.5095 131.815 12.2962C132.802 13.0829 133.295 14.2362 133.295 15.7562C133.295 17.2762 132.802 18.4162 131.815 19.1762C130.828 19.9229 129.468 20.2962 127.735 20.2962H125.455V24.6162C125.455 24.7495 125.408 24.8695 125.315 24.9762C125.222 25.0695 125.102 25.1162 124.955 25.1162H122.075ZM127.635 17.4362C128.182 17.4362 128.608 17.2962 128.915 17.0162C129.235 16.7229 129.395 16.2962 129.395 15.7362C129.395 15.2162 129.248 14.7962 128.955 14.4762C128.675 14.1562 128.235 13.9962 127.635 13.9962H125.395V17.4362H127.635ZM135.649 25.1162C135.516 25.1162 135.396 25.0695 135.289 24.9762C135.196 24.8695 135.149 24.7495 135.149 24.6162V11.6362C135.149 11.4895 135.196 11.3695 135.289 11.2762C135.382 11.1695 135.502 11.1162 135.649 11.1162H137.909C138.216 11.1162 138.442 11.2429 138.589 11.4962L143.309 18.9562V11.6362C143.309 11.4895 143.356 11.3695 143.449 11.2762C143.542 11.1695 143.662 11.1162 143.809 11.1162H146.349C146.496 11.1162 146.616 11.1695 146.709 11.2762C146.802 11.3695 146.849 11.4895 146.849 11.6362V24.5962C146.849 24.7429 146.802 24.8695 146.709 24.9762C146.616 25.0695 146.496 25.1162 146.349 25.1162H144.089C143.782 25.1162 143.556 24.9895 143.409 24.7362L138.709 17.5762V24.6162C138.709 24.7629 138.656 24.8829 138.549 24.9762C138.456 25.0695 138.336 25.1162 138.189 25.1162H135.649Z" fill="#0B132A"/>
                        <path d="M31.1473 13.6477L31.1255 13.626C31.1238 13.6247 31.1224 13.6231 31.1215 13.6212L17.5006 0L3.87983 13.6209C3.87826 13.6225 3.8758 13.6256 3.8758 13.6256L3.85333 13.6474C1.77053 15.7419 0.447586 18.4725 0.0948177 21.4052C-0.25795 24.3379 0.379698 27.3044 1.90639 29.8331C3.43309 32.3619 5.76122 34.3077 8.52069 35.3612C11.2802 36.4147 14.3126 36.5157 17.136 35.6477C17.3735 35.5751 17.6275 35.5751 17.8651 35.6477C20.6882 36.5153 23.7205 36.4144 26.4798 35.3607C29.2391 34.307 31.567 32.3613 33.0936 29.8328C34.6202 27.3042 35.2579 24.3379 34.9053 21.4054C34.5526 18.4728 33.2299 15.7422 31.1473 13.6477ZM8.7232 22.6298C8.65689 22.6961 8.6043 22.7749 8.56844 22.8615C8.53256 22.948 8.5141 23.0408 8.51412 23.1346C8.53835 25.5386 9.21776 27.8904 10.4792 29.9371C10.5079 29.9835 10.5211 30.0379 10.517 30.0922C10.513 30.1465 10.4918 30.1982 10.4566 30.2399C10.4213 30.2816 10.3738 30.311 10.3209 30.324C10.2679 30.337 10.2122 30.333 10.1616 30.3124C9.21332 29.9135 8.35182 29.3336 7.62531 28.6053C6.13646 27.1162 5.29946 25.097 5.2981 22.9912C5.29675 20.8855 6.13117 18.8652 7.61812 17.3743L17.5006 7.49273L27.3826 17.3743C28.8698 18.865 29.7045 20.8853 29.703 22.9912C29.7018 25.097 28.8647 27.1162 27.3757 28.6053C26.6492 29.3336 25.7877 29.9135 24.8396 30.3124C24.7889 30.333 24.7332 30.337 24.6802 30.324C24.6273 30.311 24.5798 30.2814 24.5445 30.2399C24.5093 30.1982 24.488 30.1465 24.484 30.092C24.4799 30.0377 24.4931 29.9833 24.5218 29.9369C25.7835 27.8904 26.4633 25.5386 26.4879 23.1346C26.4879 23.0408 26.4692 22.948 26.4332 22.8613C26.3971 22.7746 26.3444 22.696 26.2779 22.6296L21.6037 17.6717C21.557 17.6329 21.4985 17.6116 21.4378 17.6116C21.3773 17.6116 21.3186 17.6329 21.2721 17.6717C21.2255 17.7104 21.1942 17.7644 21.1833 17.824C21.1724 17.8837 21.1828 17.945 21.2127 17.9978C23.0281 21.283 21.467 26.0017 18.8637 28.6053L18.85 28.6191C18.4907 28.9745 18.0056 29.1738 17.5002 29.1736C16.9948 29.1734 16.5098 28.9738 16.1508 28.6182L16.1382 28.6053C13.5339 26.0017 11.9736 21.2835 13.7893 17.9985C13.8192 17.9457 13.8296 17.8844 13.8187 17.8247C13.8079 17.7651 13.7764 17.7111 13.7299 17.6724C13.6834 17.6336 13.6247 17.6123 13.5642 17.6123C13.5036 17.6123 13.4449 17.6336 13.3984 17.6724L8.7232 22.6298Z" fill="#F53838"/>
                    </svg>
                </div>
                <div className="pt">
                    <div className="pricing">Pricing</div>
                    <div className="testimonials">Testimonials</div>
                </div>
                <div className="ss">
                    <div className="signin">Sign In</div>
                    <button className="btn-signup"><div className="signup">Sign Up</div></button>
                </div>
            </header>
            <body className="photo">
                <div className="left-item">
                    <div className="top-text">Want anything to be easy with LaslesVPN.</div>
                    <div className="bottom-text">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</div>
                    <button className="get-started"><div className="txt">Get Started</div></button>
                </div>
                <div className="right-item"><img alt="photo" src="./img1.jpg" /></div>
            </body>
            <body className="mid-text">
                <div className="text1">Choose your plan</div>
                <div className="text2">Let's choose the package that is best for you and explore it happily and cheerfully.</div>
            </body>

            <body className="cards">
                <div className="card">
                    <img src="Free.jpg" alt="img" />
                    <h2>Free Plan</h2>
                    <button className="btn">Select</button>
                </div>
                <div className="card">
                    <img src="Standard.jpg" alt="img" />
                    <h2>Standard Plan</h2>
                    <button className="btn">Select</button>
                </div>
                <div className="card">
                    <img src="Premium.jpg" alt="img" />
                    <h2>Premium Plan</h2>
                    <button className="btn-premium">Select</button>
                </div>
            </body>

            <body className="mid-text">
                <div className="text1">Trusted by Thousands of Happy Customer</div>
                <div className="text2">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</div>
            </body>

        
            <Carousel>
                <CarouselItem>1</CarouselItem>
                <CarouselItem>2</CarouselItem>
                <CarouselItem>3</CarouselItem>
                <CarouselItem>4</CarouselItem>
            </Carousel>

            <footer className="footer">
                <div className="info-container">
                    <div>
                        <svg width="149" height="37" viewBox="0 0 149 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 25.1162C46.9067 25.1162 46.7933 25.0695 46.7 24.9762C46.6067 24.8829 46.56 24.7695 46.56 24.6362V11.5962C46.56 11.4495 46.6067 11.3362 46.7 11.2562C46.7933 11.1629 46.9067 11.1162 47.04 11.1162H48.92C49.0667 11.1162 49.18 11.1629 49.26 11.2562C49.3533 11.3362 49.4 11.4495 49.4 11.5962V22.7162H55.74C55.8867 22.7162 56.0067 22.7629 56.1 22.8562C56.1933 22.9495 56.24 23.0629 56.24 23.1962V24.6362C56.24 24.7695 56.1933 24.8829 56.1 24.9762C56.0067 25.0695 55.8867 25.1162 55.74 25.1162H47.04ZM60.9611 25.3162C60.2811 25.3162 59.6544 25.1829 59.0811 24.9162C58.5211 24.6362 58.0744 24.2629 57.7411 23.7962C57.4211 23.3295 57.2611 22.8162 57.2611 22.2562C57.2611 21.3495 57.6278 20.6162 58.3611 20.0562C59.0944 19.4962 60.1011 19.1162 61.3811 18.9162L64.1211 18.5162V18.0962C64.1211 17.5229 63.9744 17.0895 63.6811 16.7962C63.3878 16.5029 62.9211 16.3562 62.2811 16.3562C61.8411 16.3562 61.4878 16.4362 61.2211 16.5962C60.9544 16.7562 60.7344 16.9229 60.5611 17.0962C60.4011 17.2562 60.2944 17.3629 60.2411 17.4162C60.1878 17.5762 60.0878 17.6562 59.9411 17.6562H58.3811C58.2611 17.6562 58.1544 17.6162 58.0611 17.5362C57.9811 17.4562 57.9411 17.3495 57.9411 17.2162C57.9544 16.8829 58.1144 16.5095 58.4211 16.0962C58.7411 15.6695 59.2278 15.3029 59.8811 14.9962C60.5344 14.6762 61.3411 14.5162 62.3011 14.5162C63.8744 14.5162 65.0211 14.8695 65.7411 15.5762C66.4611 16.2829 66.8211 17.2095 66.8211 18.3562V24.6362C66.8211 24.7695 66.7744 24.8829 66.6811 24.9762C66.6011 25.0695 66.4878 25.1162 66.3411 25.1162H64.6811C64.5478 25.1162 64.4344 25.0695 64.3411 24.9762C64.2478 24.8829 64.2011 24.7695 64.2011 24.6362V23.8562C63.9078 24.2829 63.4944 24.6362 62.9611 24.9162C62.4278 25.1829 61.7611 25.3162 60.9611 25.3162ZM61.6411 23.3962C62.3744 23.3962 62.9744 23.1562 63.4411 22.6762C63.9078 22.1962 64.1411 21.5029 64.1411 20.5962V20.1962L62.1411 20.5162C60.6078 20.7562 59.8411 21.2695 59.8411 22.0562C59.8411 22.4829 60.0144 22.8162 60.3611 23.0562C60.7211 23.2829 61.1478 23.3962 61.6411 23.3962ZM73.3464 25.3162C72.3331 25.3162 71.4864 25.1629 70.8064 24.8562C70.1264 24.5495 69.6197 24.1962 69.2864 23.7962C68.9664 23.3829 68.8064 23.0295 68.8064 22.7362C68.8064 22.6029 68.8464 22.4962 68.9264 22.4162C69.0197 22.3362 69.1264 22.2962 69.2464 22.2962H70.8864C70.9931 22.2962 71.0864 22.3495 71.1664 22.4562C71.2331 22.5095 71.3797 22.6362 71.6064 22.8362C71.8464 23.0362 72.1131 23.1962 72.4064 23.3162C72.7131 23.4229 73.0464 23.4762 73.4064 23.4762C73.9397 23.4762 74.3731 23.3762 74.7064 23.1762C75.0397 22.9629 75.2064 22.6629 75.2064 22.2762C75.2064 22.0095 75.1264 21.7962 74.9664 21.6362C74.8197 21.4629 74.5464 21.3095 74.1464 21.1762C73.7597 21.0295 73.1731 20.8695 72.3864 20.6962C71.2531 20.4562 70.4131 20.0895 69.8664 19.5962C69.3331 19.1029 69.0664 18.4495 69.0664 17.6362C69.0664 17.1029 69.2264 16.6029 69.5464 16.1362C69.8664 15.6562 70.3397 15.2695 70.9664 14.9762C71.6064 14.6695 72.3664 14.5162 73.2464 14.5162C74.1531 14.5162 74.9331 14.6629 75.5864 14.9562C76.2397 15.2362 76.7331 15.5762 77.0664 15.9762C77.4131 16.3762 77.5864 16.7295 77.5864 17.0362C77.5864 17.1562 77.5397 17.2629 77.4464 17.3562C77.3664 17.4362 77.2664 17.4762 77.1464 17.4762H75.6464C75.4997 17.4762 75.3864 17.4229 75.3064 17.3162C75.2131 17.2495 75.0597 17.1295 74.8464 16.9562C74.6464 16.7695 74.4197 16.6229 74.1664 16.5162C73.9131 16.4095 73.6064 16.3562 73.2464 16.3562C72.7531 16.3562 72.3731 16.4629 72.1064 16.6762C71.8397 16.8895 71.7064 17.1695 71.7064 17.5162C71.7064 17.7562 71.7664 17.9562 71.8864 18.1162C72.0197 18.2762 72.2797 18.4295 72.6664 18.5762C73.0531 18.7095 73.6331 18.8495 74.4064 18.9962C76.8064 19.4629 78.0064 20.5095 78.0064 22.1362C78.0064 23.0829 77.5931 23.8495 76.7664 24.4362C75.9531 25.0229 74.8131 25.3162 73.3464 25.3162ZM80.5505 25.1162C80.4171 25.1162 80.3038 25.0695 80.2105 24.9762C80.1171 24.8829 80.0705 24.7695 80.0705 24.6362V11.3962C80.0705 11.2495 80.1171 11.1362 80.2105 11.0562C80.3038 10.9629 80.4171 10.9162 80.5505 10.9162H82.2305C82.3771 10.9162 82.4905 10.9629 82.5705 11.0562C82.6638 11.1362 82.7105 11.2495 82.7105 11.3962V24.6362C82.7105 24.7695 82.6638 24.8829 82.5705 24.9762C82.4905 25.0695 82.3771 25.1162 82.2305 25.1162H80.5505ZM89.863 25.3162C88.3696 25.3162 87.183 24.8895 86.303 24.0362C85.4363 23.1829 84.9763 21.9695 84.923 20.3962L84.903 19.8962C84.903 18.2295 85.3363 16.9162 86.203 15.9562C87.083 14.9962 88.2963 14.5162 89.843 14.5162C91.4296 14.5162 92.6496 14.9962 93.503 15.9562C94.3696 16.9162 94.803 18.1962 94.803 19.7962V20.2162C94.803 20.3495 94.7563 20.4629 94.663 20.5562C94.5696 20.6495 94.4496 20.6962 94.303 20.6962H87.663V20.8562C87.6896 21.6029 87.8896 22.2229 88.263 22.7162C88.6496 23.1962 89.1763 23.4362 89.843 23.4362C90.603 23.4362 91.223 23.1295 91.703 22.5162C91.823 22.3695 91.9163 22.2829 91.983 22.2562C92.0496 22.2162 92.163 22.1962 92.323 22.1962H94.083C94.203 22.1962 94.303 22.2295 94.383 22.2962C94.4763 22.3629 94.523 22.4562 94.523 22.5762C94.523 22.8962 94.3296 23.2762 93.943 23.7162C93.5696 24.1429 93.0296 24.5162 92.323 24.8362C91.6163 25.1562 90.7963 25.3162 89.863 25.3162ZM92.043 18.9962V18.9562C92.043 18.1695 91.843 17.5429 91.443 17.0762C91.0563 16.5962 90.523 16.3562 89.843 16.3562C89.163 16.3562 88.6296 16.5962 88.243 17.0762C87.8563 17.5429 87.663 18.1695 87.663 18.9562V18.9962H92.043ZM100.885 25.3162C99.8721 25.3162 99.0255 25.1629 98.3455 24.8562C97.6655 24.5495 97.1588 24.1962 96.8255 23.7962C96.5055 23.3829 96.3455 23.0295 96.3455 22.7362C96.3455 22.6029 96.3855 22.4962 96.4655 22.4162C96.5588 22.3362 96.6655 22.2962 96.7855 22.2962H98.4255C98.5321 22.2962 98.6255 22.3495 98.7055 22.4562C98.7721 22.5095 98.9188 22.6362 99.1455 22.8362C99.3855 23.0362 99.6521 23.1962 99.9455 23.3162C100.252 23.4229 100.585 23.4762 100.945 23.4762C101.479 23.4762 101.912 23.3762 102.245 23.1762C102.579 22.9629 102.745 22.6629 102.745 22.2762C102.745 22.0095 102.665 21.7962 102.505 21.6362C102.359 21.4629 102.085 21.3095 101.685 21.1762C101.299 21.0295 100.712 20.8695 99.9255 20.6962C98.7921 20.4562 97.9521 20.0895 97.4055 19.5962C96.8721 19.1029 96.6055 18.4495 96.6055 17.6362C96.6055 17.1029 96.7655 16.6029 97.0855 16.1362C97.4055 15.6562 97.8788 15.2695 98.5055 14.9762C99.1455 14.6695 99.9055 14.5162 100.785 14.5162C101.692 14.5162 102.472 14.6629 103.125 14.9562C103.779 15.2362 104.272 15.5762 104.605 15.9762C104.952 16.3762 105.125 16.7295 105.125 17.0362C105.125 17.1562 105.079 17.2629 104.985 17.3562C104.905 17.4362 104.805 17.4762 104.685 17.4762H103.185C103.039 17.4762 102.925 17.4229 102.845 17.3162C102.752 17.2495 102.599 17.1295 102.385 16.9562C102.185 16.7695 101.959 16.6229 101.705 16.5162C101.452 16.4095 101.145 16.3562 100.785 16.3562C100.292 16.3562 99.9121 16.4629 99.6455 16.6762C99.3788 16.8895 99.2455 17.1695 99.2455 17.5162C99.2455 17.7562 99.3055 17.9562 99.4255 18.1162C99.5588 18.2762 99.8188 18.4295 100.205 18.5762C100.592 18.7095 101.172 18.8495 101.945 18.9962C104.345 19.4629 105.545 20.5095 105.545 22.1362C105.545 23.0829 105.132 23.8495 104.305 24.4362C103.492 25.0229 102.352 25.3162 100.885 25.3162ZM111.63 25.1162C111.403 25.1162 111.216 25.0629 111.07 24.9562C110.936 24.8362 110.843 24.6895 110.79 24.5162L106.75 11.7162L106.71 11.5362C106.71 11.4295 106.75 11.3362 106.83 11.2562C106.923 11.1629 107.03 11.1162 107.15 11.1162H109.77C109.97 11.1162 110.13 11.1762 110.25 11.2962C110.383 11.4029 110.47 11.5229 110.51 11.6562L113.23 20.6962L115.97 11.6562C116.01 11.5095 116.09 11.3829 116.21 11.2762C116.343 11.1695 116.51 11.1162 116.71 11.1162H119.33C119.45 11.1162 119.55 11.1629 119.63 11.2562C119.71 11.3362 119.75 11.4295 119.75 11.5362C119.75 11.6029 119.743 11.6629 119.73 11.7162L115.67 24.5162C115.63 24.6895 115.536 24.8362 115.39 24.9562C115.256 25.0629 115.076 25.1162 114.85 25.1162H111.63ZM122.075 25.1162C121.942 25.1162 121.822 25.0695 121.715 24.9762C121.622 24.8695 121.575 24.7495 121.575 24.6162V11.6362C121.575 11.4895 121.622 11.3695 121.715 11.2762C121.808 11.1695 121.928 11.1162 122.075 11.1162H127.735C129.468 11.1162 130.828 11.5095 131.815 12.2962C132.802 13.0829 133.295 14.2362 133.295 15.7562C133.295 17.2762 132.802 18.4162 131.815 19.1762C130.828 19.9229 129.468 20.2962 127.735 20.2962H125.455V24.6162C125.455 24.7495 125.408 24.8695 125.315 24.9762C125.222 25.0695 125.102 25.1162 124.955 25.1162H122.075ZM127.635 17.4362C128.182 17.4362 128.608 17.2962 128.915 17.0162C129.235 16.7229 129.395 16.2962 129.395 15.7362C129.395 15.2162 129.248 14.7962 128.955 14.4762C128.675 14.1562 128.235 13.9962 127.635 13.9962H125.395V17.4362H127.635ZM135.649 25.1162C135.516 25.1162 135.396 25.0695 135.289 24.9762C135.196 24.8695 135.149 24.7495 135.149 24.6162V11.6362C135.149 11.4895 135.196 11.3695 135.289 11.2762C135.382 11.1695 135.502 11.1162 135.649 11.1162H137.909C138.216 11.1162 138.442 11.2429 138.589 11.4962L143.309 18.9562V11.6362C143.309 11.4895 143.356 11.3695 143.449 11.2762C143.542 11.1695 143.662 11.1162 143.809 11.1162H146.349C146.496 11.1162 146.616 11.1695 146.709 11.2762C146.802 11.3695 146.849 11.4895 146.849 11.6362V24.5962C146.849 24.7429 146.802 24.8695 146.709 24.9762C146.616 25.0695 146.496 25.1162 146.349 25.1162H144.089C143.782 25.1162 143.556 24.9895 143.409 24.7362L138.709 17.5762V24.6162C138.709 24.7629 138.656 24.8829 138.549 24.9762C138.456 25.0695 138.336 25.1162 138.189 25.1162H135.649Z" fill="#0B132A"/>
                            <path d="M31.1473 13.6477L31.1255 13.626C31.1238 13.6247 31.1224 13.6231 31.1215 13.6212L17.5006 0L3.87983 13.6209C3.87826 13.6225 3.8758 13.6256 3.8758 13.6256L3.85333 13.6474C1.77053 15.7419 0.447586 18.4725 0.0948177 21.4052C-0.25795 24.3379 0.379698 27.3044 1.90639 29.8331C3.43309 32.3619 5.76122 34.3077 8.52069 35.3612C11.2802 36.4147 14.3126 36.5157 17.136 35.6477C17.3735 35.5751 17.6275 35.5751 17.8651 35.6477C20.6882 36.5153 23.7205 36.4144 26.4798 35.3607C29.2391 34.307 31.567 32.3613 33.0936 29.8328C34.6202 27.3042 35.2579 24.3379 34.9053 21.4054C34.5526 18.4728 33.2299 15.7422 31.1473 13.6477ZM8.7232 22.6298C8.65689 22.6961 8.6043 22.7749 8.56844 22.8615C8.53256 22.948 8.5141 23.0408 8.51412 23.1346C8.53835 25.5386 9.21776 27.8904 10.4792 29.9371C10.5079 29.9835 10.5211 30.0379 10.517 30.0922C10.513 30.1465 10.4918 30.1982 10.4566 30.2399C10.4213 30.2816 10.3738 30.311 10.3209 30.324C10.2679 30.337 10.2122 30.333 10.1616 30.3124C9.21332 29.9135 8.35182 29.3336 7.62531 28.6053C6.13646 27.1162 5.29946 25.097 5.2981 22.9912C5.29675 20.8855 6.13117 18.8652 7.61812 17.3743L17.5006 7.49273L27.3826 17.3743C28.8698 18.865 29.7045 20.8853 29.703 22.9912C29.7018 25.097 28.8647 27.1162 27.3757 28.6053C26.6492 29.3336 25.7877 29.9135 24.8396 30.3124C24.7889 30.333 24.7332 30.337 24.6802 30.324C24.6273 30.311 24.5798 30.2814 24.5445 30.2399C24.5093 30.1982 24.488 30.1465 24.484 30.092C24.4799 30.0377 24.4931 29.9833 24.5218 29.9369C25.7835 27.8904 26.4633 25.5386 26.4879 23.1346C26.4879 23.0408 26.4692 22.948 26.4332 22.8613C26.3971 22.7746 26.3444 22.696 26.2779 22.6296L21.6037 17.6717C21.557 17.6329 21.4985 17.6116 21.4378 17.6116C21.3773 17.6116 21.3186 17.6329 21.2721 17.6717C21.2255 17.7104 21.1942 17.7644 21.1833 17.824C21.1724 17.8837 21.1828 17.945 21.2127 17.9978C23.0281 21.283 21.467 26.0017 18.8637 28.6053L18.85 28.6191C18.4907 28.9745 18.0056 29.1738 17.5002 29.1736C16.9948 29.1734 16.5098 28.9738 16.1508 28.6182L16.1382 28.6053C13.5339 26.0017 11.9736 21.2835 13.7893 17.9985C13.8192 17.9457 13.8296 17.8844 13.8187 17.8247C13.8079 17.7651 13.7764 17.7111 13.7299 17.6724C13.6834 17.6336 13.6247 17.6123 13.5642 17.6123C13.5036 17.6123 13.4449 17.6336 13.3984 17.6724L8.7232 22.6298Z" fill="#F53838"/>
                        </svg>
                    </div>
                    <div className="text">
                        LaslesVPN is a private virtual network that has unique
                        features and has high security.
                    </div>
                    <div className="copyright">©2020LaslesVPN</div>
                </div>
                <div className="product">
                    <h2>Product</h2>
                    <p>Download</p>
                    <p>Pricing</p>
                    <p>Locations</p>
                    <p>Server</p>
                    <p>Countries</p>
                    <p>Blog</p>
                </div>
                <div className="engage">
                    <h2>Engage</h2>
                    <p>LaslesVPN ?</p>
                    <p>FAQ</p>
                    <p>Tutorials</p>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                <div className="earn">
                    <h2>Earn Money</h2>
                    <p>Affiliate</p>
                    <p>Become Partner</p>
                </div>
            </footer>
        </div>
    )
}
