document.addEventListener("DOMContentLoaded", function() {
    const serviceType = getParameterByName('service');
    const tokoContainer = document.getElementById('toko-container');

    fetch('get_rating.php')
        .then(response => response.json())
        .then(ratings => {
            const stores = [
                {//Toko A
                    name: 'Toko A',
                    services: [
                        { name: 'Cuci AC', price: 50000, workingTime: 45 },
                        { name: 'AC Tidak Dingin', price: 150000, workingTime: 60 },
                        { name: 'AC Bocor Air', price: 100000, workingTime: 30 },
                        { name: 'Kulkas Tidak Dingin', price: 450000, workingTime: 60 },
                        { name: 'Kulkas Bocor Air', price: 250000, workingTime: 50 },
                        { name: 'Kulkas Menyetrum', price: 200000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 500000, workingTime: 80 },
                        { name: 'Freezer Bocor Air', price: 350000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 150000, workingTime: 40 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 400000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 200000, workingTime: 20 },
                        { name: 'Masalah Air Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Dispenser Tidak Keluar Air', price: 200000, workingTime: 35 },
                        { name: 'Air Dispenser Bermasalah', price: 150000, workingTime: 25 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 500000, workingTime: 75 },
                        { name: 'Pintu Showcase Rusak', price: 200000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 450000, workingTime: 65 },
                        { name: 'Chiller Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Chiller Kebocoran', price: 350000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 1000000, workingTime: 70 },
                        { name: 'Undercounter Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Pembekuan Tidak Normal', price: 400000, workingTime: 40 },
                        { name: 'Pintu Undercounter Rusak', price: 450000, workingTime: 35 }
                    ],
                    rating: ratings['1'] ? ratings['1'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['1'] ? ratings['1'].total_ratings : 0
                },
                {//Toko B
                    name: 'Toko B',
                    services: [
                        { name: 'Cuci AC', price: 80000, workingTime: 40 },
                        { name: 'AC Tidak Dingin', price: 200000, workingTime: 40 },
                        { name: 'AC Bocor Air', price: 80000, workingTime: 35 },
                        { name: 'Kulkas Tidak Dingin', price: 400000, workingTime: 65 },
                        { name: 'Kulkas Bocor Air', price: 200000, workingTime: 55 },
                        { name: 'Kulkas Menyetrum', price: 150000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 600000, workingTime: 60 },
                        { name: 'Freezer Bocor Air', price: 300000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 250000, workingTime: 20 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 350000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Masalah Air Mesin Cuci', price: 250000, workingTime: 45 },
                        { name: 'Dispenser Tidak Keluar Air', price: 180000, workingTime: 40 },
                        { name: 'Air Dispenser Bermasalah', price: 160000, workingTime: 30 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 700000, workingTime: 55 },
                        { name: 'Pintu Showcase Rusak', price: 250000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 400000, workingTime: 45 },
                        { name: 'Chiller Tidak Dingin', price: 700000, workingTime: 60 },
                        { name: 'Chiller Kebocoran', price: 300000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 950000, workingTime: 60 },
                        { name: 'Undercounter Tidak Dingin', price: 550000, workingTime: 50 },
                        { name: 'Pembekuan Tidak Normal', price: 250000, workingTime: 55 },
                        { name: 'Pintu Undercounter Rusak', price: 300000, workingTime: 45 }
                    ],
                    rating: ratings['2'] ? ratings['2'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['2'] ? ratings['2'].total_ratings : 0
                },
                {//Toko C
                    name: 'Toko C',
                    services: [
                        { name: 'Cuci AC', price: 50000, workingTime: 45 },
                        { name: 'AC Tidak Dingin', price: 150000, workingTime: 60 },
                        { name: 'AC Bocor Air', price: 100000, workingTime: 30 },
                        { name: 'Kulkas Tidak Dingin', price: 450000, workingTime: 60 },
                        { name: 'Kulkas Bocor Air', price: 250000, workingTime: 50 },
                        { name: 'Kulkas Menyetrum', price: 200000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 500000, workingTime: 80 },
                        { name: 'Freezer Bocor Air', price: 350000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 150000, workingTime: 40 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 400000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 200000, workingTime: 20 },
                        { name: 'Masalah Air Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Dispenser Tidak Keluar Air', price: 200000, workingTime: 35 },
                        { name: 'Air Dispenser Bermasalah', price: 150000, workingTime: 25 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 500000, workingTime: 75 },
                        { name: 'Pintu Showcase Rusak', price: 200000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 450000, workingTime: 65 },
                        { name: 'Chiller Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Chiller Kebocoran', price: 350000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 1000000, workingTime: 70 },
                        { name: 'Undercounter Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Pembekuan Tidak Normal', price: 400000, workingTime: 40 },
                        { name: 'Pintu Undercounter Rusak', price: 450000, workingTime: 35 }
                    ],
                    rating: ratings['3'] ? ratings['3'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['3'] ? ratings['3'].total_ratings : 0
                },
                {//Toko D
                    name: 'Toko D',
                    services: [
                        { name: 'Cuci AC', price: 50000, workingTime: 45 },
                        { name: 'AC Tidak Dingin', price: 150000, workingTime: 60 },
                        { name: 'AC Bocor Air', price: 100000, workingTime: 30 },
                        { name: 'Kulkas Tidak Dingin', price: 450000, workingTime: 60 },
                        { name: 'Kulkas Bocor Air', price: 250000, workingTime: 50 },
                        { name: 'Kulkas Menyetrum', price: 200000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 500000, workingTime: 80 },
                        { name: 'Freezer Bocor Air', price: 350000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 150000, workingTime: 40 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 400000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 200000, workingTime: 20 },
                        { name: 'Masalah Air Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Dispenser Tidak Keluar Air', price: 200000, workingTime: 35 },
                        { name: 'Air Dispenser Bermasalah', price: 150000, workingTime: 25 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 500000, workingTime: 75 },
                        { name: 'Pintu Showcase Rusak', price: 200000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 450000, workingTime: 65 },
                        { name: 'Chiller Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Chiller Kebocoran', price: 350000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 1000000, workingTime: 70 },
                        { name: 'Undercounter Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Pembekuan Tidak Normal', price: 400000, workingTime: 40 },
                        { name: 'Pintu Undercounter Rusak', price: 450000, workingTime: 35 }
                    ],
                    rating: ratings['4'] ? ratings['4'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['4'] ? ratings['4'].total_ratings : 0
                },
                {//Toko E
                    name: 'Toko E',
                    services: [
                        { name: 'Cuci AC', price: 50000, workingTime: 45 },
                        { name: 'AC Tidak Dingin', price: 150000, workingTime: 60 },
                        { name: 'AC Bocor Air', price: 100000, workingTime: 30 },
                        { name: 'Kulkas Tidak Dingin', price: 450000, workingTime: 60 },
                        { name: 'Kulkas Bocor Air', price: 250000, workingTime: 50 },
                        { name: 'Kulkas Menyetrum', price: 200000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 500000, workingTime: 80 },
                        { name: 'Freezer Bocor Air', price: 350000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 150000, workingTime: 40 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 400000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 200000, workingTime: 20 },
                        { name: 'Masalah Air Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Dispenser Tidak Keluar Air', price: 200000, workingTime: 35 },
                        { name: 'Air Dispenser Bermasalah', price: 150000, workingTime: 25 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 500000, workingTime: 75 },
                        { name: 'Pintu Showcase Rusak', price: 200000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 450000, workingTime: 65 },
                        { name: 'Chiller Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Chiller Kebocoran', price: 350000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 1000000, workingTime: 70 },
                        { name: 'Undercounter Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Pembekuan Tidak Normal', price: 400000, workingTime: 40 },
                        { name: 'Pintu Undercounter Rusak', price: 450000, workingTime: 35 }
                    ],
                    rating: ratings['5'] ? ratings['5'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['5'] ? ratings['5'].total_ratings : 0
                },
                {//Toko F
                    name: 'Toko F',
                    services: [
                        { name: 'Cuci AC', price: 50000, workingTime: 45 },
                        { name: 'AC Tidak Dingin', price: 150000, workingTime: 60 },
                        { name: 'AC Bocor Air', price: 100000, workingTime: 30 },
                        { name: 'Kulkas Tidak Dingin', price: 450000, workingTime: 60 },
                        { name: 'Kulkas Bocor Air', price: 250000, workingTime: 50 },
                        { name: 'Kulkas Menyetrum', price: 200000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 500000, workingTime: 80 },
                        { name: 'Freezer Bocor Air', price: 350000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 150000, workingTime: 40 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 400000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 200000, workingTime: 20 },
                        { name: 'Masalah Air Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Dispenser Tidak Keluar Air', price: 200000, workingTime: 35 },
                        { name: 'Air Dispenser Bermasalah', price: 150000, workingTime: 25 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 500000, workingTime: 75 },
                        { name: 'Pintu Showcase Rusak', price: 200000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 450000, workingTime: 65 },
                        { name: 'Chiller Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Chiller Kebocoran', price: 350000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 1000000, workingTime: 70 },
                        { name: 'Undercounter Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Pembekuan Tidak Normal', price: 400000, workingTime: 40 },
                        { name: 'Pintu Undercounter Rusak', price: 450000, workingTime: 35 }
                    ],
                    rating: ratings['6'] ? ratings['6'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['6'] ? ratings['6'].total_ratings : 0
                },
                {//Toko G
                    name: 'Toko G',
                    services: [
                        { name: 'Cuci AC', price: 50000, workingTime: 45 },
                        { name: 'AC Tidak Dingin', price: 150000, workingTime: 60 },
                        { name: 'AC Bocor Air', price: 100000, workingTime: 30 },
                        { name: 'Kulkas Tidak Dingin', price: 450000, workingTime: 60 },
                        { name: 'Kulkas Bocor Air', price: 250000, workingTime: 50 },
                        { name: 'Kulkas Menyetrum', price: 200000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 500000, workingTime: 80 },
                        { name: 'Freezer Bocor Air', price: 350000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 150000, workingTime: 40 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 400000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 200000, workingTime: 20 },
                        { name: 'Masalah Air Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Dispenser Tidak Keluar Air', price: 200000, workingTime: 35 },
                        { name: 'Air Dispenser Bermasalah', price: 150000, workingTime: 25 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 500000, workingTime: 75 },
                        { name: 'Pintu Showcase Rusak', price: 200000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 450000, workingTime: 65 },
                        { name: 'Chiller Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Chiller Kebocoran', price: 350000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 1000000, workingTime: 70 },
                        { name: 'Undercounter Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Pembekuan Tidak Normal', price: 400000, workingTime: 40 },
                        { name: 'Pintu Undercounter Rusak', price: 450000, workingTime: 35 }
                    ],
                    rating: ratings['7'] ? ratings['7'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['7'] ? ratings['7'].total_ratings : 0
                },
                {//Toko H
                    name: 'Toko H',
                    services: [
                        { name: 'Cuci AC', price: 50000, workingTime: 45 },
                        { name: 'AC Tidak Dingin', price: 150000, workingTime: 60 },
                        { name: 'AC Bocor Air', price: 100000, workingTime: 30 },
                        { name: 'Kulkas Tidak Dingin', price: 450000, workingTime: 60 },
                        { name: 'Kulkas Bocor Air', price: 250000, workingTime: 50 },
                        { name: 'Kulkas Menyetrum', price: 200000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 500000, workingTime: 80 },
                        { name: 'Freezer Bocor Air', price: 350000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 150000, workingTime: 40 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 400000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 200000, workingTime: 20 },
                        { name: 'Masalah Air Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Dispenser Tidak Keluar Air', price: 200000, workingTime: 35 },
                        { name: 'Air Dispenser Bermasalah', price: 150000, workingTime: 25 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 500000, workingTime: 75 },
                        { name: 'Pintu Showcase Rusak', price: 200000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 450000, workingTime: 65 },
                        { name: 'Chiller Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Chiller Kebocoran', price: 350000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 1000000, workingTime: 70 },
                        { name: 'Undercounter Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Pembekuan Tidak Normal', price: 400000, workingTime: 40 },
                        { name: 'Pintu Undercounter Rusak', price: 450000, workingTime: 35 }
                    ],
                    rating: ratings['8'] ? ratings['8'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['8'] ? ratings['8'].total_ratings : 0
                },
                {//Toko I
                    name: 'Toko I',
                    services: [
                        { name: 'Cuci AC', price: 50000, workingTime: 45 },
                        { name: 'AC Tidak Dingin', price: 150000, workingTime: 60 },
                        { name: 'AC Bocor Air', price: 100000, workingTime: 30 },
                        { name: 'Kulkas Tidak Dingin', price: 450000, workingTime: 60 },
                        { name: 'Kulkas Bocor Air', price: 250000, workingTime: 50 },
                        { name: 'Kulkas Menyetrum', price: 200000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 500000, workingTime: 80 },
                        { name: 'Freezer Bocor Air', price: 350000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 150000, workingTime: 40 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 400000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 200000, workingTime: 20 },
                        { name: 'Masalah Air Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Dispenser Tidak Keluar Air', price: 200000, workingTime: 35 },
                        { name: 'Air Dispenser Bermasalah', price: 150000, workingTime: 25 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 500000, workingTime: 75 },
                        { name: 'Pintu Showcase Rusak', price: 200000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 450000, workingTime: 65 },
                        { name: 'Chiller Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Chiller Kebocoran', price: 350000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 1000000, workingTime: 70 },
                        { name: 'Undercounter Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Pembekuan Tidak Normal', price: 400000, workingTime: 40 },
                        { name: 'Pintu Undercounter Rusak', price: 450000, workingTime: 35 }
                    ],
                    rating: ratings['9'] ? ratings['9'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['9'] ? ratings['9'].total_ratings : 0
                },
                {//Toko J
                    name: 'Toko J',
                    services: [
                        { name: 'Cuci AC', price: 50000, workingTime: 45 },
                        { name: 'AC Tidak Dingin', price: 150000, workingTime: 60 },
                        { name: 'AC Bocor Air', price: 100000, workingTime: 30 },
                        { name: 'Kulkas Tidak Dingin', price: 450000, workingTime: 60 },
                        { name: 'Kulkas Bocor Air', price: 250000, workingTime: 50 },
                        { name: 'Kulkas Menyetrum', price: 200000, workingTime: 30 },
                        { name: 'Freezer Tidak Dingin', price: 500000, workingTime: 80 },
                        { name: 'Freezer Bocor Air', price: 350000, workingTime: 60 },
                        { name: 'Pintu Freezer Rusak', price: 150000, workingTime: 40 },
                        { name: 'Mesin Cuci Tidak Bekerja', price: 400000, workingTime: 55 },
                        { name: 'Masalah Tombol Mesin Cuci', price: 200000, workingTime: 20 },
                        { name: 'Masalah Air Mesin Cuci', price: 150000, workingTime: 35 },
                        { name: 'Dispenser Tidak Keluar Air', price: 200000, workingTime: 35 },
                        { name: 'Air Dispenser Bermasalah', price: 150000, workingTime: 25 },
                        { name: 'Kebocoran Air Dispenser', price: 80000, workingTime: 30 },
                        { name: 'Showcase Tidak Dingin', price: 500000, workingTime: 75 },
                        { name: 'Pintu Showcase Rusak', price: 200000, workingTime: 45 },
                        { name: 'Suara Showcase Bermasalah', price: 450000, workingTime: 65 },
                        { name: 'Chiller Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Chiller Kebocoran', price: 350000, workingTime: 60 },
                        { name: 'Mesin Chiller Rusak', price: 1000000, workingTime: 70 },
                        { name: 'Undercounter Tidak Dingin', price: 500000, workingTime: 55 },
                        { name: 'Pembekuan Tidak Normal', price: 400000, workingTime: 40 },
                        { name: 'Pintu Undercounter Rusak', price: 450000, workingTime: 35 }
                    ],
                    rating: ratings['10'] ? ratings['10'].rating.toFixed(1) : '0.0',
                    total_ratings: ratings['10'] ? ratings['10'].total_ratings : 0
                }
            ];

            stores.forEach((store, index) => {
                store.services.forEach((service) => {
                    if (service.name.replace(/\s/g, '-') === serviceType) {
                        const storeElement = document.createElement('div');
                        storeElement.className = 'pilihan-toko';
                        storeElement.innerHTML = `
                            <h2>${store.name} (${store.rating} <i class="fa fa-star"></i>)</h2>
                            <p>Detail Jasa: ${service.name}</p>
                            <p>Waktu Pengerjaan: ${service.workingTime} menit</p>
                            <p>Harga: Rp${service.price.toLocaleString('id-ID')}</p>
                            <label for="date${store.name.replace(/\s/g, '-')}-${service.name.replace(/\s/g, '-').toLowerCase()}">Pilih Tanggal dan Waktu:</label>
                            <input type="date" id="date${store.name.replace(/\s/g, '-')}-${service.name.replace(/\s/g, '-').toLowerCase()}" name="date${store.name.replace(/\s/g, '-')}-${service.name.replace(/\s/g, '-').toLowerCase()}">
                            <input type="time" id="time${store.name.replace(/\s/g, '-')}-${service.name.replace(/\s/g, '-').toLowerCase()}" name="time${store.name.replace(/\s/g, '-')}-${service.name.replace(/\s/g, '-').toLowerCase()}">
                            <button onclick="openPaymentPopup('${store.name}', '${service.name.replace(/\s/g, '-')}', ${service.price}, '${serviceType}', ${index})">Pilih Pembayaran</button>
                            <span id="payment-status-${index}" class="payment-status"></span>
                        `;
                        tokoContainer.appendChild(storeElement);
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error fetching ratings:', error);
        });
});

function openPaymentPopup(storeName, serviceName, price, serviceType, index) {
    const dateInput = document.querySelector(`#date${storeName.replace(/\s/g, '-')}-${serviceName.replace(/\s/g, '-').toLowerCase()}`);
    const timeInput = document.querySelector(`#time${storeName.replace(/\s/g, '-')}-${serviceName.replace(/\s/g, '-').toLowerCase()}`);

    const dateValue = dateInput.value;
    const timeValue = timeInput.value;

    if (!dateValue || !timeValue) {
        dateInput.style.border = (!dateValue) ? '2px solid red' : '';
        timeInput.style.border = (!timeValue) ? '2px solid red' : '';
        return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(`${dateValue}T${timeValue}`);

    if (selectedDate < currentDate) {
        dateInput.valueAsDate = currentDate;
        currentDate.setMinutes(currentDate.getMinutes() + 1);
        timeInput.value = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

        dateInput.style.border = '';
        timeInput.style.border = '';
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "get_profile.php");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const userInfo = JSON.parse(xhr.responseText);
                if (userInfo.error) {
                    console.error("Error fetching user info:", userInfo.error);
                    return;
                }

                const { username, email, phone } = userInfo;
                const nameInput = username;
                const emailInput = email;
                const phoneInput = phone;

                const xhrPayment = new XMLHttpRequest();
                xhrPayment.open("POST", "payment.php");
                xhrPayment.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhrPayment.onreadystatechange = function() {
                    if (xhrPayment.readyState === XMLHttpRequest.DONE) {
                        if (xhrPayment.status === 200) {
                            const snapToken = xhrPayment.responseText;
                            const paymentStatusIcon = document.getElementById(`payment-status-${index}`);
                            paymentStatusIcon.textContent = 'Processing...';
                            paymentStatusIcon.style.color = '#000';
                            snap.pay(snapToken, {
                                onSuccess: function(result){
                                    paymentStatusIcon.textContent = 'Payment successful!';
                                    paymentStatusIcon.style.color = '#008000';

                                    const xhrOrder = new XMLHttpRequest();
                                    xhrOrder.open("POST", "orders.php");
                                    xhrOrder.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                                    xhrOrder.onreadystatechange = function() {
                                        if (xhrOrder.readyState === XMLHttpRequest.DONE) {
                                            if (xhrOrder.status === 200) {
                                                console.log(xhrOrder.responseText);
                                                window.location.href = `pesanan.html`;
                                            } else {
                                                console.error("Error inserting order:", xhrOrder.statusText);
                                            }
                                        }
                                    };
                                    const orderParams = `toko_name=${encodeURIComponent(storeName)}&service_name=${encodeURIComponent(serviceName)}&price=${encodeURIComponent(price)}&total_price=${encodeURIComponent(price)}&customer_name=${encodeURIComponent(nameInput)}&customer_email=${encodeURIComponent(emailInput)}&customer_phone=${encodeURIComponent(phoneInput)}&order_id=${encodeURIComponent(result.order_id)}&order_date=${encodeURIComponent(dateValue)}&order_time=${encodeURIComponent(timeValue)}`;
                                    xhrOrder.send(orderParams);
                                },
                                onPending: function(result){
                                    paymentStatusIcon.textContent = 'Pending payment...';
                                    paymentStatusIcon.style.color = '#ffd700';
                                },
                                onError: function(result){
                                    paymentStatusIcon.textContent = 'Payment failed!';
                                    paymentStatusIcon.style.color = '#ff0000';
                                },
                                onClose: function(){
                                    paymentStatusIcon.textContent = 'Payment popup closed without completing the transaction.';
                                    paymentStatusIcon.style.color = '#ff0000';
                                }
                            });
                        } else {
                            console.error("Error:", xhrPayment.statusText);
                        }
                    }
                };
                const params = `store=${encodeURIComponent(storeName)}&service=${encodeURIComponent(serviceName)}&price=${encodeURIComponent(price)}&total=${encodeURIComponent(price)}&name=${encodeURIComponent(nameInput)}&email=${encodeURIComponent(emailInput)}&phone=${encodeURIComponent(phoneInput)}&stores=${encodeURIComponent(JSON.stringify({ name: storeName, service: serviceType, price: price }))}`;
                xhrPayment.send(params);
            } else {
                console.error("Error fetching user info:", xhr.statusText);
            }
        }
    };
    xhr.send();
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}