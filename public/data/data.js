// Guide:
// 1 is bad, 10 is good (except where specified in brackets)
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
// median_housing_cost- The median cost of a house based in the suburb (1 is cheap, 10 is expensive)
// traffic- The rating given to time taken to travel, congestion etc. (1 is little, 10 is lots)
// poi- The rating given to the amount of interesting points of interest in the suburb
// construction- The rating given to the amount of construction ocurring in the area
// noise- The rating given to the complaints by neighbours about noise
// public_transport- The rating given to public transport options in the area
// distance_to_cbd- The distance to the center of brisbane (1 is far, 10 is near)

exports = module.exports = {
    bracken_ridge: {
        median_housing_cost: 4,
        traffic: 8,
        poi: 3,
        construction: 2,
        noise: 9,
        public_transport: 8,
        distance_to_cbd: 2
    },
    calamvale: {
        median_housing_cost: 7,
        traffic: 7,
        poi:4,
        construction: 1,
        noise: 2,
        public_transport: 6,
        distance_to_cbd: 4
    },
    central: {
        median_housing_cost: 10,
        traffic: 9,
        poi: 10,
        construction: 10,
        noise: 1,
        public_transport: 10,
        distance_to_cbd: 10
    },
    chandler: {
        median_housing_cost: 7,
        traffic: 4,
        poi: 4,
        construction: 8,
        noise: 2,
        public_transport: 7,
        distance_to_cbd: 5
    },
    coorparoo: {
        median_housing_cost: 5,
        traffic: 10,
        poi: 4,
        construction: 10,
        noise: 7,
        public_transport: 9,
        distance_to_cbd: 8
    },
    deagon: {
        median_housing_cost: 8,
        traffic: 3,
        poi: 4,
        construction: 1,
        noise: 10,
        public_transport: 4,
        distance_to_cbd: 3
    },
    doboy: {
        median_housing_cost: 8,
        traffic: 4,
        poi: 7,
        construction: 10,
        noise: 8,
        public_transport: 7,
        distance_to_cbd: 7
    },
    enoggera: {
        median_housing_cost: 6,
        traffic: 8,
        poi: 3,
        construction: 10,
        noise: 4,
        public_transport: 8,
        distance_to_cbd: 8
    },
    forest_lake: {
        median_housing_cost: 2,
        traffic: 7,
        poi: 6,
        construction: 6,
        noise: 8,
        public_transport: 5,
        distance_to_cbd: 4
    },
    hamilton: {
        population: [4273, 4577, 4639, 4724, 4819, 4867, 4930, 5132, 5326, 5551, 5628, 5893, 5993, 6084, 6068, 6086, 6641, 6680, 6720, 6761, 6803],
        future_traffic: {
            CoronationDrive: [173.7221832, 120.8446426, 159.5016022, 130.875885, 151.9666901, 136.3339844, 147.8845673, 139.3243866, 145.6566162, 140.9650726, 144.4373779, 141.8652954],
            FairFieldRoad_AnnerleyRoad: [117.5636749, 109.1301422, 112.9539871, 111.2625046, 112.0199966, 111.6825409, 111.8332291, 111.7660141, 111.7960129, 111.7826233, 111.7886047, 111.7859268],
            InnerCityBypassEastBound: [62.2978363, 63.43599319, 63.88158035, 64.04166412, 64.09712982, 64.1160965, 64.12255096, 64.12474823, 64.12549591, 64.12574005, 64.1258316, 64.12586212],
            InnerCityBypassWestBound: [76.83582306, 69.39167023, 73.81073761, 71.16751099, 72.7494278, 71.80123901, 72.36943054, 72.02881622, 72.23297119, 72.11058807, 72.18395233, 72.13996887],
            IpswitchRoad_BradfieldHighway: [128.7679138, 129.220108, 129.2783508, 129.2857666, 129.2867127, 129.2868347, 129.28685, 129.28685, 129.28685, 129.28685, 129.28685, 129.28685],
            KelvinGroveRoad: [148.2233276, 127.576416, 137.7789612, 132.9695435, 135.2973633, 134.1837616, 134.7196045, 134.4624634, 134.5860291, 134.5266876, 134.555191, 134.5415039],
            KingsfordSmithDrive_BreakfastCreekRoad: [112.5041962, 108.6801682, 109.5692673, 109.3649063, 109.4120026, 109.4011612, 109.403656, 109.4030838, 109.4032135, 109.4031677, 109.4031906, 109.4031906],
            LoganRoad: [104.1825256, 100.9175339, 100.4913559, 100.410881, 100.3949814, 100.3918152, 100.391182, 100.3910523, 100.3910294, 100.3910294, 100.3910294, 100.3910294],
            LutwycheRoad_BowenBrRoad: [127.725502, 122.7156448, 124.277359, 123.8040009, 123.9489059, 123.9046783, 123.9181824, 123.9140625, 123.9153137, 123.9149399, 123.9150467, 123.9150162],
            MiltonRoad: [138.5145721, 132.2758637, 130.0359192, 129.1603851, 128.8085632, 128.6657105, 128.6074677, 128.5836945, 128.5739746, 128.5700073, 128.5683746, 128.5677185],
            MoggillRoad: [122.3406143, 123.1297379, 123.0796738, 123.0828629, 123.0826569, 123.0826798, 123.0826798, 123.0826798, 123.0826798, 123.0826798, 123.0826798, 123.0826798],
            OldClevelandRoad: [107.9644623, 107.2605133, 107.3275223, 107.3211823, 107.3217621, 107.3217087, 107.3217087, 107.3217087, 107.3217087, 107.3217087, 107.3217087, 107.3217087],
            OxleyRoad_CoonanStreet: [108.3325958, 109.0601654, 109.0980606, 109.1000137, 109.1001129, 109.1001129, 109.1001129, 109.1001129, 109.1001129, 109.1001129, 109.1001129, 109.1001129],
            SandgateRoad_AbbotsfordRoad: [117.3734741, 97.39469147, 113.6950226, 99.91365051, 111.3906326, 101.6308823, 109.8387528, 102.8426514, 108.7570343, 103.7116547, 107.9895325, 104.3396072],
            StanleyStreetInbound: [213.8597565, 157.9793243, 197.7331696, 169.5867462, 189.8583527, 175.3278656, 185.8161011, 178.2691498, 183.7170715, 179.7914429, 182.6245575, 180.5819244],
            StanleyStreetOutbound: [145.1906891, 144.957016, 144.9386292, 144.9371643, 144.9370575, 144.9370422, 144.9370422, 144.9370422, 144.9370422, 144.9370422, 144.9370422, 144.9370422]
        },
        past_traffic: {
            CoronationDrive: [121.21, 93.94, 196.21, 104.55, 118.56, 98.86, 189.77, 106.44, 200.76, 105.3, 225, 105.68, 201.89, 101.89, 193.94, 104.92, 227.27, 102.65, 170.08, 101.89, 175.38, 105.3, 175.38, 100.76, 131.06, 96.59],
            FairFieldRoad_AnnerleyRoad: [88.48,91.14,130.72,97.49,130.72,99.26,121.42,100.15,125.85,104.43,138.85,107.24,123.93,100.74,110.93,95.86,126.74,100.44,99.56,95.42,108.71,95.86,123.34,95.42,96.01,89.81],
            InnerCityBypassEastBound: [61.46, 61.28, 65.36, 62.88, 67.32, 65.54, 65.72, 66.43, 63.59, 66.43, 60.39, 62.52, 60.57, 60.75, 59.68, 59.5, 60.57, 58.26, 61.46, 60.92, 64.65, 63.06, 65.54, 63.23, 63.23, 62.17],
            InnerCityBypassWestBound: [62.88, 59.86, 82.24, 61.46, 91.12, 61.28, 75.67, 62.34, 82.42, 61.81, 95.74, 72.65, 81.17, 64.12, 62.7, 59.5, 65.9, 59.68, 64.65, 59.86, 77.26, 59.5, 73, 59.68, 0, 59.33],
            IpswitchRoad_BradfieldHighway: [105.51, 101.59, 142.06, 122.25, 138.88, 129.87, 131.99, 120.55, 141.53, 128.6, 135.81, 131.57, 144.28, 125.53, 113.03, 115.25, 123.94, 114.62, 117.06, 107.2, 129.87, 109.75, 136.02, 111.97, 107.94, 110.06],
            KelvinGroveRoad: [99.06, 97.64, 186.08, 112.26, 198.35, 108.02, 175.47, 105.66, 175.94, 112.03, 142.92, 106.37, 122.64, 99.53, 132.78, 99.76, 168.16, 102.12, 133.25, 97.64, 189.86, 112.5, 150.24, 99.29, 104.95, 92.69],
            KingsfordSmithDrive_BreakfastCreekRoad: [121.2, 94.02, 177.54, 0, 148.37, 96.01, 140.58, 98.73, 134.96, 95.47, 117.75, 96.74, 117.57, 95.11, 110.69, 94.93, 125.36, 95.65, 117.21, 94.2, 128.62, 98.19, 138.95, 100.18, 142.39, 95.83],
            LoganRoad: [88.86, 97.15, 109.24, 100.54, 109.38, 105.43, 100, 102.04, 104.89, 103.67, 107.47, 105.43, 104.48, 106.25, 96.6, 102.31, 100.27, 102.99, 100.14, 100.41, 104.35, 100.27, 98.91, 102.31, 89.81, 102.58],
            LutwycheRoad_BowenBrRoad: [103.05, 101.27, 157.76, 117.56, 135.37, 121.12, 122.9, 111.96, 133.33, 116.79, 147.07, 116.03, 123.41, 108.65, 119.85, 112.47, 144.02, 106.11, 114.25, 100.25, 130.03, 104.83, 126.21, 104.07, 103.31, 97.46],
            MiltonRoad: [107.04, 111.85, 118.52, 120.74, 124.07, 117.41, 125.19, 125.19, 129.26, 126.3, 152.22, 182.22, 141.11, 150.74, 111.48, 105.56, 115.19, 105.56, 114.44, 103.7, 117.78, 109.63, 120.37, 108.89, 108.52, 104.81],
            MoggillRoad: [99.09, 111.18, 118.43, 141.09, 118.43, 135.35, 0, 144.41, 128.7, 163.44, 129.61, 156.8, 120.85, 134.44, 119.94, 147.13, 121.45, 143.5, 105.74, 121.75, 125.88, 143.2, 125.88, 145.32, 100.6, 121.45],
            OldClevelandRoad: [93.02, 90.63, 149.06, 104.43, 132.54, 101.87, 131.69, 0, 133.22, 103.75, 138.67, 107.84, 113.97, 100.17, 101.19, 94.55, 124.53, 95.74, 112.27, 91.65, 123.51, 95.23, 130.15, 98.98, 93.36, 88.07],
            OxleyRoad_CoonanStreet: [88.08, 90.46, 132.9, 115.26, 0, 110.61, 133.37, 111.2, 140.17, 113.71, 131.94, 110.01, 111.2, 97.26, 101.79, 108.34, 122.65, 104.05, 118.12, 101.07, 137.54, 107.75, 119.9, 102.15, 93.44, 98.93],
            SandgateRoad_AbbotsfordRoad: [102.28, 91.12, 122.59, 95.69, 117.26, 96.45, 114.21, 94.67, 121.83, 96.95, 135.79, 96.7, 111.42, 93.4, 112.18, 96.95, 119.04, 94.16, 110.91, 93.4, 116.5, 96.45, 112.94, 93.15, 101.78, 90.61],
            StanleyStreetInbound: [151.6, 125.19, 268.4, 156.05, 247.41, 145.19, 207.41, 155.06, 205.43, 144.94, 225.68, 145.43, 200.74, 130.86, 203.95, 146.17, 258.27, 131.85, 211.36, 137.78, 237.04, 140.74, 221.98, 148.4, 159.26, 137.78],
            StanleyStreetOutbound: [130.62, 121.98, 146.17, 141.23, 140.99, 133.58, 142.72, 149.14, 141.73, 151.6, 147.65, 178.02, 140, 148.15, 143.95, 160.49, 143.46, 160.49, 133.58, 143.21, 136.3, 139.26, 142.96, 137.04, 130.62, 121.48]
        },
        crime: [[0611, 2, 2], [0309, 3, 3], [0203, 1, 1], [0409, 1, 1], [0312, 1, 1], [1011, 1, 1], [0407, 1, 1], [0808, 1, 1], [0308, 3, 3], [0905, 2, 2], [1210, 1, 1], [0306, 2, 2], [0501, 2, 2], [1012, 2, 2], [0408, 2, 2], [1207, 1, 1], [0811, 1, 1], [0702, 1, 1], [0505, 1, 1], [0107, 4, 4], [0304, 4, 4], [1001, 1, 1], [0211, 1, 1], [0212, 1, 1], [0012, 1, 1], [0712, 5, 5], [0703, 3, 3], [0208, 1, 1], [0412, 1, 1], [0809, 1, 1], [1105, 1, 1], [1306, 1, 1], [0111, 1, 1], [0101, 2, 2], [1209, 1, 1], [0210, 2, 2], [0903, 1, 1], [0901, 1, 1], [0910, 1, 1], [0507, 1, 1], [0002, 1, 1], [0301, 3, 3], [0802, 1, 1], [0603, 4, 4], [0502, 2, 2], [0604, 2, 2], [1005, 1, 1], [0401, 2, 2], [0105, 1, 1], [0202, 1, 1], [0102, 2, 2], [0108, 6, 6], [1104, 1, 1], [1212, 3, 3], [0206, 1, 1], [0406, 1, 1], [0605, 2, 2], [0801, 1, 1], [1103, 2, 2], [0708, 1, 1], [0103, 2, 2], [1201, 1, 1], [1106, 1, 1], [0909, 1, 1], [0803, 5, 5], [0112, 1, 1], [0710, 1, 1], [1009, 1, 1], [0504, 2, 2], [1010, 1, 1], [1008, 1, 1], [0812, 1, 1], [0402, 1, 1], [1305, 1, 1], [0003, 1, 1], [0508, 1, 1], [0305, 1, 1], [0411, 2, 2], [0405, 2, 2], [0011, 1, 1], [1304, 2, 2]],
        median_housing_cost: 9,
        traffic: 8,
        poi: 9,
        construction: 4,
        construction_points: [
        {
        	name: "highrise",
        	location: [-27.437411, 153.054692]
        },
        {
        	name: "demolition",
        	location: [-27.439315, 153.071858]
        },
        {
        	name: "pipleline installation",
        	location: [-27.439116, 153.060953]
        }], 
        noise: 6,
        public_transport: 9,
        distance_to_cbd: 10,
        center: [-27.437449, 153.059627]
    },
    holland_park: {
        median_housing_cost: 4,
        traffic: 7,
        poi: 3,
        construction: 6,
        noise: 7,
        public_transport: 8,
        distance_to_cbd: 5,
        center: [-27.518223, 153.067280]
    },
    jamboree: {
        median_housing_cost: 4,
        traffic: 9,
        poi: 1,
        construction: 7,
        noise: 5,
        public_transport: 3,
        distance_to_cbd: 1
    },
    mcdowall: {
        median_housing_cost: 3,
        traffic: 6,
        poi: 2,
        construction: 7,
        noise: 4,
        public_transport: 7,
        distance_to_cbd: 3
    },
    macgregor: {
        median_housing_cost: 2,
        traffic: 7,
        poi: 4,
        construction: 8,
        noise: 5,
        public_transport: 7,
        distance_to_cbd: 3
    },
    marchant: {
        median_housing_cost: 7,
        traffic: 9,
        poi: 8,
        construction: 5,
        noise: 2,
        public_transport: 8,
        distance_to_cbd: 8
    },
    moorooka: {
        median_housing_cost: 3,
        traffic: 7,
        poi: 4,
        construction: 7,
        noise: 4,
        public_transport: 7,
        distance_to_cbd: 8
    },
    morningside: {
        median_housing_cost: 8,
        traffic: 9,
        poi:7,
        construction: 5,
        noise: 8,
        public_transport: 8,
        distance_to_cbd: 8
    },
    northgate: {
        median_housing_cost: 3,
        traffic: 4,
        poi: 2,
        construction: 8,
        noise: 8,
        public_transport: 7,
        distance_to_cbd: 2
    },
    paddington: {
        median_housing_cost: 8,
        traffic: 8,
        poi: 9,
        construction: 10,
        noise: 4,
        public_transport: 10,
        distance_to_cbd: 9
    },
    pullenvale: {
        median_housing_cost: 1,
        traffic: 1,
        poi: 3,
        construction: 9,
        noise: 3,
        public_transport: 0,
        distance_to_cbd: 10
    },
    runcorn: {
        median_housing_cost: 1,
        traffic: 2,
        poi: 5,
        construction: 3,
        noise: 4,
        public_transport: 7,
        distance_to_cbd: 1
    },
    tennyson: {
        median_housing_cost: 2,
        traffic: 5,
        poi: 6,
        construction: 0,
        noise: 3,
        public_transport: 2,
        distance_to_cbd: 2
    },
    the_gabba: {
        median_housing_cost: 9,
        traffic: 9,
        poi: 9,
        construction: 7,
        noise: 10,
        public_transport: 10,
        distance_to_cbd: 9
    },
    the_gap: {
        median_housing_cost: 4,
        traffic: 6,
        poi: 6,
        construction: 3,
        noise: 5,
        public_transport: 8,
        distance_to_cbd: 6
    },
    walter_taylor: {
        median_housing_cost: 7,
        traffic: 5,
        poi: 5,
        construction: 4,
        noise: 8,
        public_transport: 3,
        distance_to_cbd: 5
    },
    wynnum_manly: {
        median_housing_cost: 5,
        traffic: 3,
        poi: 6,
        construction: 2,
        noise: 2,
        public_transport: 2,
        distance_to_cbd: 1
    }
}
