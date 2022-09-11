/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

module.exports = job = ({ role, timezone, font }) => {
    const detectiveHog = fs.readFileSync(path.resolve(__dirname, './images/detective-hog.png'), {
        encoding: 'base64',
    })

    return `<html>
    <head>
        <meta charset="utf-8" />
        <style>
            @font-face {
                font-family: 'MatterVF';
                src: url(data:application/x-font-woff;charset=utf-8;base64,${font}) format('woff supports variations'),
                    url(data:application/x-font-woff;charset=utf-8;base64,${font}) format('woff-variations');
                font-style: normal;
                font-weight: 300 900;
                font-display: swap;
            }
            body {
                font-family: 'MatterVF', 'sans-serif';
                overflow: hidden;
                color: black;
                background-color: #eeefe9;
            }
            .careers {
                list-style: none;
                margin: 42px 0 0 0;
                padding: 0;
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                column-gap: 54px;
            }
            .careers li {
                font-size: 36px;
                padding-bottom: 18px;
                margin-bottom: 23px;
                border-bottom: 2px dashed #d4d4d4;
                font-weight: 400;
            }
        </style>
    </head>

    <body>
        <section style="padding: 0px 45px 0px 45px;">
            <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                <div style="margin-top: 41px">
                    <svg width="251" height="48" viewBox="0 0 251 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3154_131496)">
                            <path
                                d="M16.8771 28.6008C16.5087 29.3382 15.4564 29.3382 15.0879 28.6008L13.0093 24.4402C12.8687 24.1588 12.8687 23.8277 13.0093 23.5463L15.0879 19.3857C15.4564 18.6483 16.5087 18.6483 16.8771 19.3857L18.9557 23.5463C19.0963 23.8277 19.0963 24.1588 18.9557 24.4402L16.8771 28.6008Z"
                                fill="#1D4AFF"
                            />
                            <path
                                d="M16.8771 44.596C16.5087 45.3334 15.4564 45.3334 15.0879 44.596L13.0093 40.4354C12.8687 40.1541 12.8687 39.8229 13.0093 39.5416L15.0879 35.381C15.4564 34.6436 16.5087 34.6436 16.8771 35.381L18.9557 39.5416C19.0963 39.8229 19.0963 40.1541 18.9557 40.4354L16.8771 44.596Z"
                                fill="#1D4AFF"
                            />
                            <path
                                d="M0 36.006C0 35.1149 1.07754 34.6688 1.70739 35.2992L11.0805 44.6797C11.7101 45.3098 11.2638 46.3866 10.3731 46.3866H0.999999C0.447715 46.3866 0 45.9389 0 45.3866V36.006ZM0 29.9774C0 30.2425 0.105248 30.4967 0.292612 30.6842L15.6895 46.0934C15.8771 46.2811 16.1316 46.3866 16.3969 46.3866H26.3556C27.2463 46.3866 27.6926 45.3098 27.063 44.6797L1.70739 19.304C1.07754 18.6736 0 19.1197 0 20.0108V29.9774ZM0 13.9822C0 14.2473 0.105248 14.5015 0.292612 14.689L31.672 46.0934C31.8596 46.2811 32.114 46.3866 32.3794 46.3866H42.3381C43.2288 46.3866 43.675 45.3098 43.0454 44.6797L1.70739 3.30875C1.07754 2.6784 0 3.12448 0 4.01558V13.9822ZM15.9825 13.9822C15.9825 14.2473 16.0877 14.5015 16.2751 14.689L46.24 44.6778C46.8699 45.3082 47.9474 44.8621 47.9474 43.971V34.0044C47.9474 33.7393 47.8422 33.4851 47.6548 33.2976L17.6899 3.30875C17.06 2.6784 15.9825 3.12448 15.9825 4.01558V13.9822ZM33.6723 3.30875C33.0425 2.6784 31.9649 3.12448 31.9649 4.01558V13.9822C31.9649 14.2473 32.0702 14.5015 32.2575 14.689L46.24 28.6826C46.8699 29.313 47.9474 28.8669 47.9474 27.9758V18.0092C47.9474 17.7441 47.8422 17.4899 47.6548 17.3024L33.6723 3.30875Z"
                                fill="#F9BD2B"
                            />
                            <path
                                d="M67.9856 37.6494L51.9154 21.5663C51.2855 20.936 50.208 21.3821 50.208 22.2731V45.3866C50.208 45.9389 50.6557 46.3866 51.208 46.3866H75.7159C76.2682 46.3866 76.7159 45.9389 76.7159 45.3866V42.2681C76.7159 41.7158 76.2674 41.2723 75.7169 41.2276C72.8071 40.9914 70.0635 39.7289 67.9856 37.6494ZM57.8796 41.2681C56.468 41.2681 55.3224 40.1216 55.3224 38.7089C55.3224 37.2962 56.468 36.1497 57.8796 36.1497C59.2912 36.1497 60.4368 37.2962 60.4368 38.7089C60.4368 40.1216 59.2912 41.2681 57.8796 41.2681Z"
                                fill="black"
                            />
                            <path
                                d="M0 45.3866C0 45.9389 0.447715 46.3866 1 46.3866H10.3731C11.2638 46.3866 11.7101 45.3098 11.0805 44.6798L1.70739 35.2992C1.07754 34.6688 0 35.1149 0 36.006V45.3866Z"
                                fill="#1D4AFF"
                            />
                            <path
                                d="M15.9825 17.5952L1.70739 3.30875C1.07754 2.6784 0 3.12448 0 4.01558V13.9822C0 14.2473 0.105247 14.5015 0.292612 14.689L15.9825 30.3914V17.5952Z"
                                fill="#1D4AFF"
                            />
                            <path
                                d="M1.70739 19.3039C1.07754 18.6736 0 19.1197 0 20.0108V29.9774C0 30.2424 0.105247 30.4967 0.292612 30.6842L15.9825 46.3865V33.5904L1.70739 19.3039Z"
                                fill="#1D4AFF"
                            />
                            <path
                                d="M31.9649 18.0092C31.9649 17.7441 31.8596 17.4899 31.6723 17.3024L17.6898 3.30876C17.06 2.6784 15.9824 3.12448 15.9824 4.01558V13.9822C15.9824 14.2473 16.0877 14.5015 16.275 14.689L31.9649 30.3914V18.0092Z"
                                fill="#F54E00"
                            />
                            <path
                                d="M15.9824 46.3866H26.3555C27.2463 46.3866 27.6925 45.3098 27.0629 44.6798L15.9824 33.5904V46.3866Z"
                                fill="#F54E00"
                            />
                            <path
                                d="M15.9824 17.5952V29.9774C15.9824 30.2425 16.0877 30.4967 16.275 30.6842L31.9649 46.3866V34.0044C31.9649 33.7393 31.8596 33.4851 31.6723 33.2976L15.9824 17.5952Z"
                                fill="#F54E00"
                            />
                            <path
                                d="M95.3634 40.0001H101.931V29.1009H107.418C113.445 29.1009 117.311 25.5233 117.311 19.9905C117.311 14.4577 113.445 10.8801 107.418 10.8801H95.3634V40.0001ZM101.931 23.4849V16.4961H106.753C109.247 16.4961 110.743 17.8273 110.743 19.9905C110.743 22.1537 109.247 23.4849 106.753 23.4849H101.931Z"
                                fill="black"
                            />
                            <path
                                d="M129.192 40.3329C135.594 40.3329 140.249 35.7569 140.249 29.5169C140.249 23.2769 135.594 18.7009 129.192 18.7009C122.708 18.7009 118.136 23.2769 118.136 29.5169C118.136 35.7569 122.708 40.3329 129.192 40.3329ZM124.204 29.5169C124.204 26.1889 126.2 23.9009 129.192 23.9009C132.144 23.9009 134.139 26.1889 134.139 29.5169C134.139 32.8449 132.144 35.1329 129.192 35.1329C126.2 35.1329 124.204 32.8449 124.204 29.5169Z"
                                fill="black"
                            />
                            <path
                                d="M150.759 40.3329C155.664 40.3329 158.989 37.2545 158.989 33.6353C158.989 25.1489 147.725 27.8945 147.725 24.5665C147.725 23.6513 148.681 23.0689 150.052 23.0689C151.466 23.0689 153.17 23.9425 153.71 25.8561L158.615 23.8177C157.659 20.7809 154.126 18.7009 149.845 18.7009C145.231 18.7009 142.363 21.4465 142.363 24.7329C142.363 32.6785 153.461 30.4737 153.461 33.7601C153.461 34.9249 152.38 35.7153 150.759 35.7153C148.431 35.7153 146.81 34.0929 146.311 32.1377L141.407 34.0513C142.487 37.2129 145.646 40.3329 150.759 40.3329Z"
                                fill="black"
                            />
                            <path
                                d="M174.789 39.7921L174.373 34.5089C173.667 34.8833 172.752 35.0081 172.004 35.0081C170.508 35.0081 169.51 33.9265 169.51 32.0545V24.1089H174.581V19.0337H169.51V12.9601H163.4V19.0337H160.074V24.1089H163.4V32.8449C163.4 37.9201 166.85 40.3329 171.38 40.3329C172.627 40.3329 173.791 40.1249 174.789 39.7921Z"
                                fill="black"
                            />
                            <path
                                d="M196.093 10.8801V22.1953H184.538V10.8801H177.97V40.0001H184.538V27.8113H196.093V40.0001H202.702V10.8801H196.093Z"
                                fill="black"
                            />
                            <path
                                d="M217.28 40.3329C223.681 40.3329 228.337 35.7569 228.337 29.5169C228.337 23.2769 223.681 18.7009 217.28 18.7009C210.796 18.7009 206.223 23.2769 206.223 29.5169C206.223 35.7569 210.796 40.3329 217.28 40.3329ZM212.292 29.5169C212.292 26.1889 214.287 23.9009 217.28 23.9009C220.231 23.9009 222.226 26.1889 222.226 29.5169C222.226 32.8449 220.231 35.1329 217.28 35.1329C214.287 35.1329 212.292 32.8449 212.292 29.5169Z"
                                fill="black"
                            />
                            <path
                                d="M240.13 39.3345C242.417 39.3345 244.453 38.5441 245.534 37.1713V39.1681C245.534 41.4977 243.664 43.1201 240.796 43.1201C238.759 43.1201 236.971 42.1217 236.68 40.4161L231.11 41.2897C231.859 45.2417 235.891 47.9041 240.796 47.9041C247.238 47.9041 251.52 44.1185 251.52 38.5025V19.0337H245.493V20.8225C244.37 19.5329 242.458 18.7009 240.006 18.7009C234.186 18.7009 230.529 22.6945 230.529 29.0177C230.529 35.3409 234.186 39.3345 240.13 39.3345ZM236.473 29.0177C236.473 25.8977 238.302 23.9009 241.128 23.9009C243.996 23.9009 245.825 25.8977 245.825 29.0177C245.825 32.1377 243.996 34.1345 241.128 34.1345C238.302 34.1345 236.473 32.1377 236.473 29.0177Z"
                                fill="black"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_3154_131496">
                                <rect width="251" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 style="font-size: 36px; margin: 51px 0 10px 0; line-height: 64px; opacity: .5">We're looking for a</h1>
                    <h2 style="font-size: 84px; line-height: 84px; margin: 0; max-width: 730px;">
                        ${role.replace(' (Remote)', '')}
                    </h2>
                </div>
                <div style="margin-bottom: 41px;">
                    <div style="display: flex; align-items: center;">
                        <svg style="width: 64px; opacity: .5" width="34" height="48" viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5006 0C7.35177 0 0 7.34889 0 16.5006C0 25.6495 16.5006 48 16.5006 48C16.5006 48 33.0013 25.6495 33.0013 16.5006C33.0013 7.34889 25.6495 0 16.5006 0ZM16.5006 23.9986C12.3017 23.9986 8.99982 20.6996 8.99982 16.4978C8.99982 12.2988 12.2988 8.99694 16.5006 8.99694C20.6996 8.99694 24.0014 12.2959 24.0014 16.4978C24.0014 20.6995 20.6997 23.9986 16.5006 23.9986Z" fill="black"/>
                            </svg>
                            <div style="margin-left: 28px; font-weight: 600;
                            font-size: 36px;
                            line-height: 64px;">Remote</div>
                    </div>

                    ${
                        timezone
                            ? `<div style="display: flex; align-items: center; margin-top: 30px;">
                                <svg
                                    style="width: 64px; opacity: .5;"
                                    width="49"
                                    height="49"
                                    viewBox="0 0 49 49"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        opacity="0.6"
                                        d="M24.8197 0.152924C18.4542 0.152924 12.3505 2.68117 7.84815 7.18138C3.348 11.6836 0.819702 17.7874 0.819702 24.1529C0.819702 30.5184 3.34794 36.6221 7.84815 41.1245C12.3504 45.6246 18.4542 48.1529 24.8197 48.1529C31.1852 48.1529 37.2889 45.6247 41.7913 41.1245C46.2914 36.6223 48.8197 30.5184 48.8197 24.1529C48.8197 17.7874 46.2915 11.6837 41.7913 7.18138C37.2891 2.68122 31.1852 0.152924 24.8197 0.152924V0.152924ZM24.8197 43.7899C19.6118 43.7899 14.6169 41.7219 10.9346 38.0381C7.25056 34.3562 5.18277 29.3612 5.18277 24.1529C5.18277 18.9447 7.25077 13.9501 10.9346 10.2678C14.6165 6.58378 19.6115 4.51599 24.8197 4.51599C30.0279 4.51599 35.0225 6.58399 38.7048 10.2678C42.3888 13.9497 44.4566 18.9447 44.4566 24.1529C44.4566 29.3612 42.3886 34.3558 38.7048 38.0381C35.0229 41.7221 30.0279 43.7899 24.8197 43.7899V43.7899Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M27.0023 23.259V11.0616C27.0023 9.85681 26.0245 8.87904 24.8197 8.87904C23.6149 8.87904 22.6371 9.85681 22.6371 11.0616V24.1529C22.6351 24.7339 22.8621 25.2902 23.2712 25.7013L29.8168 32.247C30.6821 32.9895 31.9728 32.9384 32.7787 32.1324C33.5847 31.3265 33.6337 30.0378 32.8933 29.1706L27.0023 23.259Z"
                                        fill="black"
                                    />
                                </svg>

                                <div
                                    style="margin-left: 28px; font-weight: 600;
                            font-size: 36px;
                            line-height: 64px;"
                                >
                                    ${timezone}
                                </div>
                            </div>`
                            : ''
                    }
                </div>
            </div>
           <img style="max-width: 490px; position: absolute; right: 30px; bottom: 13px;" src="data:image/jpeg;charset=utf-8;base64,${detectiveHog}" />
        </section>
    </body>
</html>`
}
