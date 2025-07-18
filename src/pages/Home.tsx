import { Heart, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Inline SVG for the ring icon with Tailwind color support
const RingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 510.38 421.92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <g transform="translate(-3.8425658,-23.845484)">
      <path
        d="M 149.58801,444.84377 C -24.381563,430.5495 -51.070301,183.85775 115.58598,130.55316 l 9.64967,-3.08642 -17.53111,-19.9972 C 73.951756,68.968745 75.138266,76.648382 98.517956,48.009669 120.38581,21.222875 112.92785,23.969312 163.75142,23.987073 c 51.64542,0.01805 42.24384,-4.135425 70.77316,31.26649 16.01413,19.871875 16.98123,15.450765 -10.18436,46.557847 -12.15285,13.91613 -21.94035,25.42811 -21.75,25.58217 0.19036,0.15407 4.94647,1.74086 10.56915,3.52622 11.80886,3.74963 28.79251,11.88828 38.52695,18.46229 l 6.75,4.55852 6.75,-4.56218 c 107.04923,-72.352244 254.34512,11.44501 248.88882,141.5939 -5.21329,124.3523 -145.70886,196.83497 -248.82499,128.37059 l -6.68616,-4.43931 -7.2875,4.67117 c -22.98483,14.7329 -47.13165,22.91018 -74.91257,25.36901 -12.54735,1.11054 -12.0186,1.11252 -26.77591,-0.10002 z m 38.99894,-16.8281 c 14.97124,-2.58108 27.79516,-6.92922 41.84937,-14.18962 17.27707,-8.92534 16.55623,-7.77749 9.38666,-14.94706 l -6.05206,-6.05206 -5.4173,3.21136 C 143.44084,446.37427 34.756776,383.38882 34.979056,283.97233 c 0.0912,-40.80859 21.88941,-87.82461 34.12391,-73.60115 3.22271,3.74661 3.0669,4.50145 -3.18764,15.44291 -56.0596524,98.06877 45.102134,209.22845 146.563614,161.04861 12.85428,-6.10396 12.35394,-4.67904 5.39285,-15.35829 -34.22534,-52.50631 -33.83953,-124.04318 0.94874,-175.9145 5.74302,-8.56318 5.9118,-7.68881 -2.31905,-12.014 -39.63216,-20.82611 -86.67518,-16.36938 -124.090154,11.75596 -12.61155,9.48027 -22.4849,0.29353 -11.07903,-10.30858 45.560174,-42.34962 126.552094,-38.64627 173.141564,7.91689 29.1647,29.14822 48.97569,86.03215 29.96246,86.03215 -5.28767,0 -6.75543,-2.22378 -8.61572,-13.05355 -2.51272,-14.62784 -9.88838,-34.23839 -15.94225,-42.38758 -5.5737,-7.50282 -20.46254,36.5705 -20.4182,60.44113 0.0377,20.2967 12.79721,63 18.82406,63 2.97924,0 14.45734,-27.8635 17.17219,-41.6861 2.01629,-10.26593 9.2947,-13.83281 14.34986,-7.03234 4.48608,6.03491 -5.25633,36.53769 -18.0805,56.60871 l -3.44406,5.39027 5.29315,5.35973 c 7.32499,7.41713 11.05649,4.17436 21.93284,-19.06019 C 365.33996,197.37346 170.74515,65.204945 57.285286,184.7521 c -95.451072,100.57218 -5.686,266.8806 131.301664,243.26357 z m 196.86343,-1.35346 c 133.45804,-31.46056 154.93106,-211.7017 32.48594,-272.68192 -46.29425,-23.05551 -115.70365,-18.48684 -146.44282,9.63917 -0.24355,0.22284 2.17499,3.05058 5.37453,6.28386 l 5.81734,5.87868 10.12548,-5.34896 c 84.06172,-44.4071 185.09028,13.53859 189.23872,108.53929 1.74498,39.96081 -19.51433,90.25631 -31.13658,73.66323 -2.33524,-3.33402 -1.79948,-5.90089 3.30747,-15.84638 49.73288,-96.85208 -52.9435,-202.45408 -150.51066,-154.79924 -11.95516,5.83928 -11.53687,4.83377 -5.65769,13.59997 34.76852,51.84188 35.15465,123.438 0.94874,175.9145 -6.96109,10.67925 -7.46143,9.25433 5.39285,15.35829 40.13808,19.05991 86.35555,13.39729 121.48709,-14.88475 10.81968,-8.71019 13.17675,-9.47531 17.10098,-5.55107 10.72185,10.72184 -30.77102,38.59957 -67.04983,45.04865 C 266.28486,430.96685 184.0903,308.18691 244.44452,215.0633 l 4.15375,-6.40902 -5.97442,-5.97442 -5.97442,-5.97442 -3.56586,4.88345 c -76.36076,104.5761 25.46336,254.98874 152.36681,225.07332 z M 135.34972,101.63892 128.20752,80.972331 H 116.69376 105.18 l 2.37816,2.98202 c 6.70998,8.41376 34.41607,39.617109 34.65596,39.030479 0.15279,-0.37362 -2.93619,-9.97928 -6.8644,-21.34591 z m 68.94059,0.14038 c 9.43031,-10.831169 17.14601,-19.943669 17.14601,-20.249999 0,-0.30633 -5.08506,-0.55697 -11.30013,-0.55697 h -11.30013l-6.94987,20.226319c-3.82243,11.12448-7.10385,20.91198-7.29206,21.75-0.45195,2.01247-1.00383,2.60562 19.69618,-21.16935z m-28.96839,0.60689c3.91292,-11.322379 7.1144,-20.772379 7.1144,-20.999999 0,-0.22762-8.5875,-0.41386-19.08333,-0.41386-10.49584,0-18.93334,0.36609-18.75,0.81352 0.18333,0.44744 3.46077,9.89744 7.2832,20.999999l6.94987,20.18648h4.68573 4.68573z m-47.3436,-37.481819c0.36302,-0.587379 2.36085,-6.437379 4.43963,-13l3.77958,-11.93204h-5.75071-5.75072l-10.12989,12.437381c-5.57144,6.840559-10.12989,12.690559-10.12989,13 0,1.081028 22.86491,0.590221 23.542,-0.505341z m54.49615,0.31796c0.021,-0.4125-1.66652,-6.273789-3.75,-13.025088l-3.78815,-12.275087-11.45031,0.275087-11.4503,0.275088-3.78333,12c-2.08083,6.6-3.79069,12.3375-3.79969,12.75-0.009,0.4125 8.53363,0.75 18.98363,0.75 10.45,0 19.01717,-0.3375 19.03815,-0.75z m39.96185,-0.0048c0,-0.415165-4.40598,-6.152665-9.79107,-12.75l-9.79106,-11.995154-5.70894,-0.299904c-3.13991,-0.164947-5.70893,0.09824-5.70893,0.584855 0,1.030975 6.99378,23.353132 7.66517,24.465049 0.59367,0.983193 23.33483,0.97847 23.33483,-0.0048z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const DrinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <g>
      <path
        d="m 347.30781,513.5827 c -14.11019,-5.03549 -21.30796,-21.17844 -15.81261,-35.46404 1.04518,-2.71702 10.69337,-16.70685 22.1858,-32.16931 11.18498,-15.04878 20.86431,-28.20686 21.50962,-29.24017 0.9635,-1.5428 -0.55247,-8.35464 -8.47807,-38.09516 -5.30825,-19.91903 -9.86497,-36.7724 -10.12605,-37.45195 -0.35162,-0.91518 -5.07385,-1.24158 -18.21307,-1.25887 -19.50714,-0.0257 -26.33506,-1.24522 -41.92745,-7.48871 -22.98953,-9.20546 -44.30683,-28.89981 -53.3088,-49.25025 l -2.02814,-4.58494 -5.23699,3.55849 c -7.88597,5.35845 -22.16014,11.92307 -32.08395,14.75525 -11.98357,3.42003 -28.84585,5.07817 -39.39004,3.8734 l -8.237,-0.94116 -1.43973,5.05063 c -6.68455,23.44971 -18.63391,69.98409 -18.23671,71.01918 0.27297,0.71135 9.73915,13.71172 21.03597,28.88973 11.29681,15.178 21.23142,28.93409 22.0769,30.56907 7.0298,13.59412 1.99927,29.8586 -11.38907,36.82265 -10.1794,5.29489 -11.50776,5.10524 -65.4837,-9.34932 -25.876491,-6.92963 -49.138001,-13.65833 -51.692261,-14.95267 -5.74759,-2.91253 -12.15917,-10.04064 -13.72138,-15.25485 -2.93974,-9.81199 -0.77117,-20.02892 5.85241,-27.57276 4.06831,-4.63355 5.38085,-5.29073 42.97157,-21.51542 l 30.500001,-13.16424 10.05493,-37.72025 10.05493,-37.72024 -9.08937,-4.50013 c -27.864681,-13.79574 -48.265481,-37.58719 -57.204331,-66.7118 -2.46407,-8.02844 -2.70243,-10.25818 -2.75672,-25.78832 -0.0514,-14.68699 0.24115,-18.03578 2.14984,-24.61271 1.89067,-6.51486 46.284751,-107.702348 49.537411,-112.910691 1.34816,-2.158743 4.98482,-3.976592 7.9553,-3.976592 1.15934,0 9.97234,2.103845 19.58445,4.675211 18.25503,4.883462 22.40266,6.957755 23.62135,11.81342 1.02179,4.07115 -1.81582,9.36608 -5.94369,11.090815 -3.42594,1.431451 -4.26198,1.328781 -16.57918,-2.035989 -7.13421,-1.948901 -13.51436,-3.533106 -14.17811,-3.520455 -1.00321,0.01912 -37.829621,81.134351 -37.736871,83.120661 0.0423,0.90548 11.455541,5.31951 18.030061,6.97305 3.35339,0.8434 10.76895,1.37694 19,1.36702 15.52304,-0.0187 22.55722,-1.49933 33.5,-7.05145 3.85,-1.95339 10.11962,-5.14653 13.93248,-7.09585 11.85381,-6.06023 23.6828,-8.57791 40.56752,-8.63436 15.45261,-0.0517 22.97392,1.1436 35.26125,5.60366 l 6.65783,2.41666 0.54461,-4.11119 c 1.0294,-7.77094 3.53631,-32.5269 3.53631,-34.92143 0,-2.22581 -0.89399,-2.63213 -12.54426,-5.70143 -10.49684,-2.76542 -12.94507,-3.78116 -15,-6.2233 -3.48539,-4.14216 -3.30611,-9.068516 0.46734,-12.841966 3.96455,-3.96455 6.42479,-3.813288 26.11841,1.605826 14.17813,3.901409 16.85288,4.957688 19.30489,7.62364 2.82538,3.07192 2.84111,3.16123 2.13283,12.11007 l -0.71353,9.01534 2.36716,-0.50866 c 1.30194,-0.27976 12.49216,-3.23868 24.86716,-6.57537 75.28422,-20.299037 72.85808,-19.780223 76.89696,-16.443923 2.60216,2.149513 48.13952,103.939943 51.16324,114.366073 3.06859,10.58085 3.79389,31.56279 1.48496 42.95783 -3.82091 18.85696 -12.87922 35.78539 -27.24543 50.91706 -10.28836 10.83654 -20.09314 18.08274 -32.5654 24.06734 l -8.39587 4.02862 9.93196 37.20654 c 5.46257 20.46359 10.44891 37.69563 11.08076 38.29343 0.63185 0.5978 15.69945 7.32461 33.48354 14.94851 25.37794 10.8793 33.31569 14.72509 36.89418 17.875 14.0481 12.36563 11.97307 34.64748 -4.10402 44.06929 -5.31465 3.11458 -95.8028 27.58995 -104.12488 28.16384 -4.23404 0.29198 -7.56796 -0.1458 -11.32725 -1.48738 z m 47.65663 -27.73502 c 19.61884 -5.26837 39.94562 -10.71869 45.17062 -12.11183 5.225 -1.39314 10.75683 -3.1792 12.29296 -3.96904 4.91495 -2.52713 5.55878 -8.72865 1.27526 -12.28365 -0.90207 -0.74865 -15.45845 -7.32077 -32.34751 -14.6047 l -30.70739 -13.24353 -19.85787 26.64581 c -19.08688 25.61128 -21.65545 29.49653 -21.65545 32.75635 0 2.40803 4.69457 6.38945 7.53393 6.38945 1.44366 0 18.67662 -4.31049 38.29545 -9.57886 z m -233.8238 -33.15536 c 1.5216 -1.9344 1.98577 -3.55904 1.58679 -5.55391 -0.53139 -2.65696 -40.02312 -56.71136 -41.43358 -56.71232 -0.36233 -2.4e-4 -14.55249 5.95135 -31.533671 13.22577 -31.93335 13.67965 -33.87512 14.84827 -33.87512 20.38715 0 5.38935 1.87175 6.10736 49.444001 18.96698 24.9183 6.73586 47.18584 12.28606 49.48342 12.33378 3.41661 0.071 4.56912 -0.4112 6.32816 -2.64745 z M 356.94559 318.78116 c 37.74853 -7.83819 68.22709 -43.64756 68.26952 -80.2101 0.009 -8.03796 -0.83798 -18.14452 -1.52119 -18.14452 -0.11772 0 -3.01058 1.13634 -6.42858 2.52519 -15.08755 6.13063 -34.00502 8.5804 -50.13028 6.4918 -13.10298 -1.69716 -23.76325 -5.19898 -35.28868 -11.59206 -10.95668 -6.07761 -18.04232 -8.72746 -27.95122 -10.45301 -8.70589 -1.51608 -24.52462 -0.97337 -25.66962 0.88067 -0.45942 0.74392 -1.12913 4.22044 -1.48825 7.72562 -1.39429 13.60913 -6.64775 27.57655 -15.29786 40.67255 -4.30514 6.51786 -4.4171 6.88011 -3.24515 10.5 3.22097 9.94894 11.51731 22.79291 19.56576 30.29076 20.60342 19.19392 50.56028 27.25692 79.18555 21.3131 z m -171.7843 -38.41089 c 19.76591 -2.46384 36.63583 -10.62723 50.51383 -24.44372 15.08167 -15.01483 20.05217 -27.15694 22.92417 -56 0.87625 -8.8 1.84596 -17.69427 2.15491 -19.76503 l 0.56174 -3.76504 -5.84044 -2.58656 c -13.38921 -5.92971 -30.18114 -8.35346 -44.34044 -6.40013 -11.28868 1.55734 -18.73555 4.1284 -29.03997 10.02622 -10.23123 5.85593 -23.39438 10.4071 -34.87696 12.05874 -16.97228 2.44129 -39.08273 -0.33121 -52.985351 -6.64398 -2.97125 -1.34915 -5.55738 -2.29791 -5.74695 -2.10834 -0.18957 0.18957 -0.72555 4.13355 -1.19107 8.76439 -2.33419 23.22002 5.58955 45.2553 22.725611 63.19805 21.05415 22.04529 46.13798 31.28066 75.14092 27.6654 z m 215.14285 -72.85816 c 10.20643 -2.6116 16.11178 -5.63765 15.38302 -7.88265 -0.30404 -0.9366 -8.61535 -19.70292 -18.46959 -41.70291 -11.66926 -26.05212 -18.38155 -39.9151 -19.24965 -39.75651 -0.73307 0.13391 -22.03286 5.79845 -47.33286 12.58785 l -46 12.34437 -1.63993 14.91214 c -0.90195 8.20168 -1.93574 17.88915 -2.2973 21.5277 l -0.65738 6.61557 12.79731 0.50301 c 18.3611 0.7217 28.39081 3.3671 44.85196 11.83001 19.29848 9.92162 27.95084 12.1169 44.94534 11.40352 5.5 -0.23088 13.45108 -1.30283 17.66908 -2.3821 z M 197.9102 94.917166 c -8.2208 -4.610368 -5.66746 -16.890606 3.77528 -18.157143 7.41693 -0.994819 12.91258 6.231117 10.01355 13.166269 -0.68979 1.65014 -1.95872 3.584531 -2.81984 4.298646 -2.46864 2.047214 -7.9375 2.392341 -10.96899 0.692228 z M 332.41919 78.712955 c -1.21872 -0.22911 -3.35622 -1.771805 -4.75 -3.428211 -3.24265 -3.85367 -3.3581 -8.830628 -0.28413 -12.248081 3.33375 -3.706255 41.77228 -27.610116 44.39836 -27.610116 5.20462 0 10.35164 4.9012 10.35164 9.857239 0 5.008612 -2.50564 7.31716 -19.9289 18.361334 -25.02978 15.865764 -25.16869 15.936031 -29.78697 15.067835 z M 288.49538 67.966374 c -1.14658 -0.803095 -2.65113 -2.827696 -3.34346 -4.499113 -1.11658 -2.695667 -0.65785 -5.711591 4.06107 -26.699458 6.11893 -27.2145987 7.15456 -29.3412557 14.28846 -29.3412557 5.12912 0 8.14201 1.973758 9.54521 6.2531007 0.90072 2.746924 0.22328 6.942548 -4.39938 27.246899 -4.76793 20.942444 -5.79271 24.286646 -8.04389 26.25 -3.01708 2.631319 -8.92838 3.016924 -12.10801 0.789827 z m -40.64969 -9.552807 c -2.12888 -1.674572 -22.88244 -33.414298 -26.59361 -40.671279 -4.54128 -8.8801837 6.40816 -18.41007273 14.15291 -12.3180497 2.0917 1.645328 22.60427 33.0297407 26.59238 40.6865677 4.73586 9.092443 -6.17465 18.577495 -14.15168 12.302761 z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const Home = () => {
  const venueBgOpacity = 0.2;
  const flowersBgOpacity = 0.2;

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/venue_watercolor.png)', opacity: venueBgOpacity }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-wedding-coral mb-4">
              Lauren & Alex
            </h1>
            
            <div className="w-32 h-0.5 bg-wedding-sage mx-auto mb-6"></div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto shadow-lg border border-wedding-peach">
              <p className="text-lg font-medium text-wedding-sage mb-2">Save the Date!</p>
              <p className="text-3xl font-serif font-bold text-wedding-coral mb-2">August 28, 2026</p>
              <p className="text-gray-600">Bluemont, VA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-wedding-cream to-wedding-peach relative">
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ 
            backgroundImage: 'url(/images/test_flowers.png)', 
            opacity: flowersBgOpacity,
            position: 'absolute',
            width: '100vw',
            minWidth: '100%',
            left: 0,
            bottom: 0,
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        /> */}
        <img
          src="/images/test_flowers.png"
          alt="flowers background"
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100vw',
            minWidth: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
            opacity: 0.2,
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-4">
                Day-Of Details
              </h2>
              <p className="text-gray-600 text-lg">Everything you need to know</p>
            </div>
{/* 
            <div className="flex justify-center mb-8">
              <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg max-w-md w-full">
                <CardHeader className="text-center">
                  <CardTitle className="font-serif text-2xl text-wedding-coral">Welcome Party</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-xl font-semibold text-wedding-sage">August 27, 2026</p>
                    <p className="text-gray-600">Thursday</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">7:00 PM</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">Bluemont</p>
                  </div>
                </CardContent>
              </Card>
            </div> */}

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg max-w-md w-full mx-auto">
                <CardHeader className="text-center">
                  <RingIcon className="w-12 h-12 text-wedding-coral mx-auto mb-4" />
                  <CardTitle className="font-serif text-2xl text-wedding-coral">Ceremony</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-xl font-semibold text-wedding-sage">August 28, 2026</p>
                    <p className="text-gray-600">Friday</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">5:00 PM</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">Bluemont</p>
                  </div>
                  {/* <p className="text-gray-600">12729 Ridgeside Rd, Bluemont, VA 20135</p> */}
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg max-w-md w-full mx-auto">
                <CardHeader className="text-center">
                  <DrinkIcon className="w-12 h-12 text-wedding-coral mx-auto mb-4" />
                  <CardTitle className="font-serif text-2xl text-wedding-coral">Cocktail Hour & Reception</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-xl font-semibold text-wedding-sage">August 28, 2026</p>
                    <p className="text-gray-600">Following ceremony</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">5:30 PM - 11:00 PM</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">Banquet Hall</p>
                  </div>
                  {/* <p className="text-gray-600">Same location</p> */}
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-wedding-coral">Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-wedding-sage mb-2">Dress Code</h4>
                  <p className="text-gray-700">Garden party formal - think floral prints, and pastels!</p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-sage mb-2">Weather</h4>
                  <p className="text-gray-700">Weather permitting, the ceremony and cocktail hour will be outside on the patio.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-sage mb-2">Parking</h4>
                  <p className="text-gray-700">Free parking available on-site. Bus service will be provided from hotel block.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="w-full py-1 bg-transparent">
        <div className="container mx-auto text-center">
          <span className="text-wedding-blue text-sm font-semibold">Created on Alex's Laptop &lt;3</span>
        </div>
      </footer>
    </>
  );
};

export default Home;
